// AdminPage.js
import { BarChart, Card, LineChart, List, ListItem, ProgressCircle, Text, Title } from '@tremor/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import {
  fetchCategoryProductDetails,
  fetchOrderPayments,
  fetchOrderProductDetails,
} from '../../redux/slices/statisticSlice'
import { fetchOrders } from '../../redux/slices/orderSlice'

const AdminPage = () => {
  const dispatch = useDispatch()
  const categoryProductDetails = useSelector((state) => state.statistics.categoryProductDetails)
  const orderProductDetails = useSelector((state) => state.statistics.orderProductDetails)
  const ordersOriginal = useSelector((state) => state.order.ordersOriginal)
  const totalRevenueLast30Days = useSelector((state) => state.statistics.totalRevenueLast30Days)
  const [totalRevenueGoal, setTotalRevenueGoal] = useState(2000)
  const [totalSalesThisMonth, setTotalSalesThisMonth] = useState(0)

  useEffect(() => {
    dispatch(fetchOrders())
    dispatch(fetchOrderProductDetails()) // Disparar la acción para obtener los productos más comprados al cargar el componente
    dispatch(fetchCategoryProductDetails()) // Disparar la acción para obtener los productos más comprados al cargar el componente
    dispatch(fetchOrderPayments()) // Disparar la acción para obtener los productos más comprados al cargar el componente
  }, [dispatch])

  const dataFormatter = (number) => Intl.NumberFormat('us').format(number).toString()

  const sortedOrderProductDetails =
    orderProductDetails &&
    orderProductDetails.data &&
    [...orderProductDetails.data].sort((a, b) => b.attributes.quantity - a.attributes.quantity)

  // Crear un objeto para almacenar la cantidad total de cada producto
  const productQuantities = {}

  // Calcular la cantidad total de cada producto
  sortedOrderProductDetails?.forEach((detail) => {
    const productId = detail.attributes.product.data.id
    const quantity = detail.attributes.quantity

    // Si el producto ya está en el objeto, sumar la cantidad
    if (productQuantities[productId]) {
      productQuantities[productId] += quantity
    } else {
      // Si no, establecer la cantidad
      productQuantities[productId] = quantity
    }
  })

  // Ordenar el objeto productQuantities por sus valores en orden descendente
  const sortedProducts = Object.entries(productQuantities).sort(([, a], [, b]) => b - a)

  // Calcula la cantidad de productos por categoría
  const categoriesCount = {}

  categoryProductDetails?.data?.forEach((detail) => {
    const category = detail.attributes.product.data.attributes.category.data.attributes.name
    if (category) {
      categoriesCount[category] = (categoriesCount[category] || 0) + 1
    }
  })

  // Ordena las categorías por la cantidad de productos de forma descendente

  const sortedCategories = Object.entries(categoriesCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7) // Limita a las primeras 7 categorías más populares

  // Formatea los datos para el BarChart
  const chartData = sortedCategories.map(([category, count]) => ({
    name: category,
    Cantidad: count,
  }))

  // Crear un rango de fechas para los últimos 30 días
  const currentDate = new Date()
  const last30Days = []
  for (let i = 29; i >= 0; i--) {
    const date = new Date(currentDate)
    date.setDate(date.getDate() - i)
    last30Days.push(date.toISOString().split('T')[0])
  }

  // Completar el conjunto de datos con las fechas sin ventas
  const lineChartData = last30Days.map((date) => ({
    date,
    Total: totalRevenueLast30Days[date] || 0, // Si no hay ventas para esta fecha, establece Cantidad en 0
  }))

  useEffect(() => {
    // Calcular la cantidad en ventas del mes actual
    const currentDate = new Date()
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    let totalSales = 0

    for (const date in totalRevenueLast30Days) {
      const paymentDate = new Date(date)
      if (paymentDate >= firstDayOfMonth && paymentDate <= currentDate) {
        totalSales += totalRevenueLast30Days[date]
      }
    }

    setTotalSalesThisMonth(totalSales)

    if (totalSales >= totalRevenueGoal) {
      setTotalRevenueGoal(totalRevenueGoal * 2) // Incrementa el objetivo en un 50%
    }
  }, [totalRevenueLast30Days])

  useEffect(() => {
    // Calcular la cantidad en ventas del mes actual
    // Lógica para calcular totalSalesThisMonth basado en totalRevenueLast30Days
    // Lógica para actualizar totalRevenueGoal si es necesario
  }, [totalSalesThisMonth, totalRevenueGoal])

  // Calcular el progreso hacia el objetivo de ventas
  const progress = (totalSalesThisMonth / totalRevenueGoal) * 100

  // Define a state variable to store the average order value
  const [averageOrderValue, setAverageOrderValue] = useState(0)

  // Function to calculate the average order value
  const calculateAverageOrderValue = () => {
    // Ensure that we have order details available

    if (orderProductDetails && orderProductDetails.data) {
      // Calculate the total value of all orders
      const totalOrderValue = orderProductDetails.data.reduce((total, order) => total + order.attributes.subtotal, 0)

      // Calculate the average order value
      const averageValue = totalOrderValue / orderProductDetails.data.length

      // Update the state with the calculated average order value
      setAverageOrderValue(averageValue)
    }
  }

  // Define a state variable to store the average order value
  const [totalSalesVolume, setTotalSalesVolume] = useState(0)

  const calculateVolumeOfSales = () => {
    // Ensure that we have order details available
    if (orderProductDetails && orderProductDetails.data) {
      // Get the current date
      const currentDate = new Date()

      // Calculate the date 7 days ago
      const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)

      // Filter the order details to include only orders placed in the last 7 days
      const ordersLast7Days = orderProductDetails.data.filter((order) => {
        const orderDate = new Date(order.attributes.createdAt)
        return orderDate >= sevenDaysAgo && orderDate <= currentDate
      })

      // Calculate the total sales volume in the last 7 days
      const totalSalesVolume = ordersLast7Days.reduce((total, order) => {
        // Ensure that the subtotal is a number
        const subtotal = parseFloat(order.attributes.subtotal)
        // Add the subtotal to the total
        return total + subtotal
      }, 0)

      // Update the state with the calculated total sales volume
      setTotalSalesVolume(totalSalesVolume)
    }
  }

  // Call the function to calculate the average order value when order details are available
  useEffect(() => {
    calculateAverageOrderValue()
    calculateVolumeOfSales()
  }, [orderProductDetails])

  // Define state to store the number of orders generated in the last 7 days
  const [ordersGeneratedLast7Days, setOrdersGeneratedLast7Days] = useState(0)

  // Calculate the number of orders generated in the last 7 days
  useEffect(() => {
    // Logic to filter orders from the last 7 days and count them
    const currentDate = new Date()
    const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)

    const ordersLast7Days = ordersOriginal.filter((order) => {
      const orderDate = new Date(order.attributes.createdAt) // Assuming createdAt field is available in your order object
      return orderDate >= sevenDaysAgo && orderDate <= currentDate
    })

    setOrdersGeneratedLast7Days(ordersLast7Days.length)
  }, [ordersOriginal])

  return (
    <>
      <BreadCrumb
        paths={[
          {
            name: 'Estadísticas',
            href: `/admin/estadisticas`,
            active: true,
          },
        ]}
      />
      <section className="p-4">
        <article className="max-w-screen-xl py-12 mx-auto md:py-24">
          <h2 className="mb-8 text-2xl md:text-4xl">Gráficos de Rendimiento</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-8 md:grid-cols-3">
            <Card className="grid gap-4 md:col-span-3 sm:grid-cols-3">
              <Card>
                <Title className="font-bold">Promedio en Compras</Title>
                <Text>Valor promedio de las ordenes de clientes.</Text>
                <div className="flex justify-between mt-4">
                  <Text className="!text-3xl md:!text-4xl font-bold text-blue-600">
                    ${averageOrderValue.toFixed(2)}
                  </Text>
                </div>
              </Card>
              <Card>
                <Title className="font-bold">Volumen de Ventas</Title>
                <Text>Volumen de ventas en los últimos 7 días.</Text>
                <div className="flex justify-between mt-4">
                  <Text className="!text-3xl md:!text-4xl font-bold text-violet-600">
                    {' '}
                    ${totalSalesVolume.toFixed(2)}
                  </Text>
                </div>
              </Card>
              <Card>
                <Title className="font-bold">Ordenes Generadas</Title>
                <Text>Ordenes generadas en los últimos 7 días</Text>
                <div className="flex justify-between mt-4">
                  <Text className="!text-3xl md:!text-4xl font-bold text-indigo-600">{ordersGeneratedLast7Days}</Text>
                </div>
              </Card>
            </Card>
            <Card>
              <Title className="font-bold">Categorías con Más Ventas</Title>
              <Text>Categorías más cotizadas de todo el tiempo.</Text>
              <BarChart
                data={chartData}
                index="name"
                categories={['Cantidad']}
                colors={['purple']}
                valueFormatter={dataFormatter}
                yAxisWidth={20}
                onValueChange={(v) => console.log(v)}
                showAnimation
              />
            </Card>
            <Card className="md:col-span-2">
              <Title className="font-bold">Monto Total en Ventas</Title>
              <Text>Total de facturación en los últimos 30 días</Text>
              <LineChart
                data={lineChartData}
                index="date"
                categories={['Total']}
                colors={['indigo']}
                valueFormatter={dataFormatter}
                yAxisWidth={40}
              />
            </Card>
            <Card className="md:col-span-2">
              <Title className="font-bold">Productos Más Vendidos</Title>
              <Text>Volúmen de venta de los productos de todo el tiempo.</Text>
              <div className="flex items-center justify-between pb-2 mt-4 border-b">
                <Text className="font-semibold text-indigo-700">Producto</Text>
                <div className="flex items-center gap-5 md:gap-16">
                  <Text className="font-semibold text-indigo-700">Ventas</Text>
                  <Text className="font-semibold text-indigo-700 pe-4">Stock</Text>
                </div>
              </div>
              <List className="overflow-auto max-h-72">
                {sortedProducts.map(([productId, quantity]) => {
                  const productDetail = sortedOrderProductDetails.find(
                    (detail) => detail.attributes.product.data.id === parseInt(productId),
                  )
                  const product = productDetail.attributes.product.data.attributes

                  return (
                    <ListItem key={productId} className="p-1 transition duration-300 pe-2 group hover:bg-violet-200">
                      <div className="flex justify-between">
                        <div className="flex items-center flex-1 gap-1">
                          <img
                            src={product.picture.data.attributes.url}
                            className="block object-contain h-full w-7 md:w-10"
                            alt={product.picture.data.attributes.name}
                          />
                          <a
                            href={`/shop/${productDetail.attributes.product.data.attributes.category.data.attributes.name.toLowerCase()}/${productId}`}
                            target="_blank"
                            className="h-full text-xs uppercase truncate transition group-hover:text-gray-900 group-hover:font-semibold  max-w-[8rem] md:max-w-md flex items-center"
                          >
                            {product.name}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 md:gap-20">
                        <div className="flex items-center justify-center w-8 gap-1">
                          <p className="mt-1 text-xs italic font-semibold text-gray-900">{quantity}</p>
                        </div>
                        <div className="flex items-center justify-center w-8 gap-1">
                          <p className="mt-1 text-xs italic font-semibold text-gray-900">{product.quantity}</p>
                        </div>
                      </div>
                    </ListItem>
                  )
                })}
              </List>
            </Card>
            <Card>
              <Title className="font-bold">Objetivo de Ventas</Title>
              <Text>Valor a lograr como meta del mes actual.</Text>
              <div className="flex flex-col items-center justify-center gap-4 my-auto  h-[21rem] place-items-center">
                <ProgressCircle value={progress} size="xl" color={'indigo'} showAnimation>
                  <span className="text-2xl font-medium text-slate-900">{Math.round(progress)}%</span>
                </ProgressCircle>
                <div className="text-center">
                  <p className="text-xl font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    ${totalSalesThisMonth.toFixed(2)}/${totalRevenueGoal}
                  </p>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Cantidad en Ventas
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </article>
      </section>
    </>
  )
}

export default AdminPage
