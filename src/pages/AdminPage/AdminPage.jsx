// AdminPage.js
import { BarChart, Card, LineChart, List, ListItem, ProgressCircle, Text, Title } from '@tremor/react'
import React, { useEffect, useState } from 'react'
import { BsFire } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import {
  fetchCategoryProductDetails,
  fetchOrderPayments,
  fetchOrderProductDetails,
} from '../../redux/slices/statisticSlice'

const AdminPage = () => {
  const dispatch = useDispatch()
  const categoryProductDetails = useSelector((state) => state.statistics.categoryProductDetails)
  const orderProductDetails = useSelector((state) => state.statistics.orderProductDetails)
  const totalRevenueLast30Days = useSelector((state) => state.statistics.totalRevenueLast30Days)
  const [totalRevenueGoal, setTotalRevenueGoal] = useState(500)
  const [totalSalesThisMonth, setTotalSalesThisMonth] = useState(0)

  useEffect(() => {
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
            <Card>
              <Title className="font-bold">Categorías con Más Ventas</Title>
              <Text>Categorías más cotizadas en todo el tiempo.</Text>
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
              <Text>Volúmen de venta de los productos en todo el tiempo.</Text>
              <div className="flex items-center justify-between pb-2 mt-4 border-b">
                <Text className="font-semibold text-indigo-700">Producto</Text>
                <Text className="font-semibold text-indigo-700">Unidades</Text>
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
                        <div className="flex items-center gap-1">
                          <img
                            src={product.picture.data.attributes.url}
                            className="block object-contain h-full w-7 md:w-10"
                            alt={product.picture.data.attributes.name}
                          />
                          <a
                            href={`/shop/${productId}`}
                            target="_blank"
                            className="h-full text-xs uppercase truncate transition group-hover:text-gray-900 group-hover:font-semibold  max-w-[10rem] md:max-w-md flex items-center"
                          >
                            {product.name}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="mt-1 text-xs italic font-semibold text-gray-900">{quantity}</p>
                        {quantity >= 3 && <BsFire className="text-red-500" />}
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
