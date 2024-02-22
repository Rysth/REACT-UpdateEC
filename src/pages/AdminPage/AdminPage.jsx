// AdminPage.js
import { BarChart, Card, DonutChart, LineChart, List, ListItem, Text, Title } from '@tremor/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryProductDetails, fetchOrderProductDetails } from '../../redux/slices/statisticSlice'
import { BsFire } from 'react-icons/bs'

const datahero = [
  {
    name: 'Noche Holding AG',
    value: 9800,
  },
  {
    name: 'Rain Drop AG',
    value: 4567,
  },
  {
    name: 'Push Rail AG',
    value: 3908,
  },
  {
    name: 'Flow Steal AG',
    value: 2400,
  },
  {
    name: 'Tiny Loop Inc.',
    value: 2174,
  },
  {
    name: 'Anton Resorts Holding',
    value: 1398,
  },
]

const lineChartdata = [
  {
    date: 'Jan 22',
    SemiAnalysis: 2890,
    'The Pragmatic Engineer': 2338,
  },
  {
    date: 'Feb 22',
    SemiAnalysis: 2756,
    'The Pragmatic Engineer': 2103,
  },
  {
    date: 'Mar 22',
    SemiAnalysis: 3322,
    'The Pragmatic Engineer': 2194,
  },
  {
    date: 'Apr 22',
    SemiAnalysis: 3470,
    'The Pragmatic Engineer': 2108,
  },
  {
    date: 'May 22',
    SemiAnalysis: 3475,
    'The Pragmatic Engineer': 1812,
  },
  {
    date: 'Jun 22',
    SemiAnalysis: 3129,
    'The Pragmatic Engineer': 1726,
  },
  {
    date: 'Jul 22',
    SemiAnalysis: 3490,
    'The Pragmatic Engineer': 1982,
  },
  {
    date: 'Aug 22',
    SemiAnalysis: 2903,
    'The Pragmatic Engineer': 2012,
  },
  {
    date: 'Sep 22',
    SemiAnalysis: 2643,
    'The Pragmatic Engineer': 2342,
  },
  {
    date: 'Oct 22',
    SemiAnalysis: 2837,
    'The Pragmatic Engineer': 2473,
  },
  {
    date: 'Nov 22',
    SemiAnalysis: 2954,
    'The Pragmatic Engineer': 3848,
  },
  {
    date: 'Dec 22',
    SemiAnalysis: 3239,
    'The Pragmatic Engineer': 3736,
  },
]

const AdminPage = () => {
  const dispatch = useDispatch()
  const categoryProductDetails = useSelector((state) => state.statistics.categoryProductDetails)
  const orderProductDetails = useSelector((state) => state.statistics.orderProductDetails)

  useEffect(() => {
    dispatch(fetchOrderProductDetails()) // Disparar la acción para obtener los productos más comprados al cargar el componente
    dispatch(fetchCategoryProductDetails()) // Disparar la acción para obtener los productos más comprados al cargar el componente
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
    console.log(category)
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

  return (
    <section className="p-4">
      <article className="max-w-screen-xl py-12 mx-auto md:py-24">
        <h2 className="mb-8 text-2xl md:text-4xl">Gráficos de Rendimiento</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
          <Card>
            <Title className="font-bold">Categorías con Más Ventas</Title>
            <Text>Visualice las categorías que más ventas ha brindado.</Text>
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
          <Card>
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
          <Card className="md:col-span-2">
            <Title>Rendimiento</Title>
            <LineChart
              data={lineChartdata}
              index="date"
              categories={['SemiAnalysis', 'The Pragmatic Engineer']}
              colors={['indigo', 'rose']}
              valueFormatter={dataFormatter}
              yAxisWidth={60}
              onValueChange={(v) => console.log(v)}
            />
          </Card>
        </div>
      </article>
    </section>
  )
}

export default AdminPage
