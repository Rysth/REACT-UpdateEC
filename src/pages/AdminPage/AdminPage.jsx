// AdminPage.js
import { BarChart, Card, DonutChart, LineChart, List, ListItem, Text, Title } from '@tremor/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCategoryProductDetails,
  fetchOrderPayments,
  fetchOrderProductDetails,
} from '../../redux/slices/statisticSlice'
import { BsFire } from 'react-icons/bs'

const AdminPage = () => {
  const dispatch = useDispatch()
  const categoryProductDetails = useSelector((state) => state.statistics.categoryProductDetails)
  const orderProductDetails = useSelector((state) => state.statistics.orderProductDetails)
  const totalRevenueLast30Days = useSelector((state) => state.statistics.totalRevenueLast30Days)

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

  return (
    <section className="p-4">
      <article className="max-w-screen-xl py-12 mx-auto md:py-24">
        <h2 className="mb-8 text-2xl md:text-4xl">Gráficos de Rendimiento</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 md:grid-cols-3">
          <Card>
            <Title className="font-bold">Categorías con Más Ventas</Title>
            <Text>Visualice las categorías más cotizadas.</Text>
            <BarChart
              data={chartData}
              index="name"
              categories={['Cantidad']}
              colors={['purple']}
              valueFormatter={dataFormatter}
              yAxisWidth={48}
              onValueChange={(v) => console.log(v)}
              showAnimation
            />
          </Card>
          <Card className="md:col-span-2">
            <Title className="font-bold">Monto Total Vendido</Title>
            <Text>Visualice el total de facturación de los últimos 30 días</Text>
            <LineChart
              data={lineChartData}
              index="date"
              categories={['Total']}
              colors={['indigo']}
              valueFormatter={dataFormatter}
              yAxisWidth={60}
            />
          </Card>
          <Card className="md:col-span-2">
            <Title className="font-bold">Historial de Productos Vendidos</Title>
            <Text>Visualice los productos vendidos y su volúmen de venta.</Text>
            <div className="flex items-center justify-between pb-2 mt-4 border-b">
              <Text className="font-semibold text-violet-700">Producto</Text>
              <Text className="font-semibold text-violet-700">Unidades</Text>
            </div>
            <List className="overflow-auto max-h-72">
              {sortedOrderProductDetails?.map((detail) => (
                <ListItem key={detail.id} className="p-1 transition duration-300 pe-2 group hover:bg-violet-200">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <img
                        src={detail.attributes.product.data.attributes.picture.data.attributes.url}
                        className="block object-contain h-full w-7"
                        alt=""
                      />
                      <a
                        href={`/shop/${detail.attributes.product.data.id}`}
                        target="_blank"
                        className="h-full text-xs uppercase truncate transition group-hover:text-gray-900 group-hover:font-semibold  max-w-[10rem] md:max-w-xs flex items-center"
                      >
                        {detail.attributes.product.data.attributes.name}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="mt-1 text-xs italic font-semibold text-gray-900">{detail.attributes.quantity}</p>
                    {detail.attributes.quantity >= 3 && <BsFire className="text-red-500" />}
                  </div>
                </ListItem>
              ))}
            </List>
          </Card>

          <Card>
            <Title className="font-bold">Historial de Productos Vendidos</Title>
            <Text>Visualice el volúmen de venta de los productos.</Text>
            <div className="flex items-center justify-between pb-2 mt-4 border-b">
              <Text className="font-semibold text-violet-700">Producto</Text>
              <Text className="font-semibold text-violet-700">Unidades</Text>
            </div>
            <List className="overflow-auto max-h-72">
              {sortedOrderProductDetails?.map((detail) => (
                <ListItem key={detail.id} className="p-1 transition duration-300 pe-2 group hover:bg-violet-200">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <img
                        src={detail.attributes.product.data.attributes.picture.data.attributes.url}
                        className="block object-contain h-full w-7"
                        alt=""
                      />
                      <a
                        href={`/shop/${detail.attributes.product.data.id}`}
                        target="_blank"
                        className="h-full text-xs uppercase truncate transition group-hover:text-gray-900 font-medium  max-w-[10rem] md:max-w-[15rem] flex items-center"
                      >
                        {detail.attributes.product.data.attributes.name}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="mt-1 text-xs italic font-semibold text-gray-900">{detail.attributes.quantity}</p>
                    {detail.attributes.quantity >= 3 && <BsFire className="text-red-500" />}
                  </div>
                </ListItem>
              ))}
            </List>
          </Card>
        </div>
      </article>
    </section>
  )
}

export default AdminPage
