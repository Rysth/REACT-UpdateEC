import { Badge, Button, Table, TextInput } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import SectionLayout from '../../layouts/SectionLayout'
import { fetchOrders, orderActions } from '../../redux/slices/orderSlice'
import debounce from 'lodash/debounce'
import { HiOutlineShoppingCart, HiArrowLeft, HiDocumentSearch } from 'react-icons/hi'
import LoadingCard from '../../components/ui/LoadingCard/LoadingCard'

function OrderPage() {
  const dispatch = useDispatch()
  const { userData } = useSelector((store) => store.session)
  const { ordersArray, loading } = useSelector((store) => store.order)
  const [searchData, setSearchData] = useState('')

  // Debounced search handler
  const debouncedSearch = debounce((newData) => {
    setSearchData(newData)
    dispatch(orderActions.searchOrder(newData))
  }, 200) // 200ms debounce time

  const onSearchChange = (event) => {
    const newData = event.target.value
    debouncedSearch(newData)
  }

  useEffect(() => {
    dispatch(fetchOrders(userData.id))
  }, [userData, dispatch])

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  if (loading) {
    return <LoadingCard />
  }

  if (ordersArray.length === 0 && loading) {
    return (
      <header className="flex flex-col items-center justify-center w-full h-[100vh] max-w-screen-xl gap-2 py-2 mx-auto place-items-center">
        <HiDocumentSearch className="text-8xl" />
        <h3 className="w-full text-lg font-bold text-center text-gray-900 uppercase sm:text-2xl ">
          ¡No tienes Ordenes Aún!
        </h3>
        <Button href="/shop" color="blue" size="sm">
          <HiArrowLeft className="mr-1" />
          Regresar
        </Button>
      </header>
    )
  }

  return (
    <section>
      <BreadCrumb
        paths={[
          {
            name: 'Ordenes',
            href: `/orders`,
            active: true,
          },
        ]}
      />
      <SectionLayout>
        <article className="max-w-screen-xl min-h-screen py-12 mx-auto space-y-10">
          <header className="grid gap-3">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Mis Ordenes</h2>
            <TextInput
              placeholder="Buscar..."
              className="max-w-sm"
              defaultValue={searchData}
              onChange={onSearchChange}
            />
          </header>
          <main className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className="min-w-[10rem]">Fecha</Table.HeadCell>
                <Table.HeadCell>Factura ID</Table.HeadCell>
                <Table.HeadCell className="min-w-[10rem]">Estado Envío</Table.HeadCell>
                <Table.HeadCell className="min-w-[10rem]">Método de Pago</Table.HeadCell>
                <Table.HeadCell>Estado Pago</Table.HeadCell>
                <Table.HeadCell>Total</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {ordersArray.map((order, index) => {
                  const paymentID = order.attributes.payment_detail.data.attributes.payment_id
                  const paymentStatus = order.attributes.payment_detail.data.attributes.payment_status
                  const paymentTotal = order.attributes.payment_detail.data.attributes.amount_paid
                  const isCompleted = paymentStatus === 'COMPLETED'

                  return (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                      <Table.Cell className="font-medium text-gray-900">{order.attributes.date}</Table.Cell>
                      <Table.Cell>{paymentID}</Table.Cell>
                      <Table.Cell>
                        {true ? (
                          <Badge color="blue" className="max-w-max">
                            Completo
                          </Badge>
                        ) : (
                          <Badge color="indigo" className="max-w-max">
                            Pendiente
                          </Badge>
                        )}
                      </Table.Cell>
                      <Table.Cell>PayPal</Table.Cell>
                      <Table.Cell>
                        {isCompleted ? (
                          <Badge color="success" className="max-w-max">
                            {paymentStatus}
                          </Badge>
                        ) : (
                          <Badge color="failure" className="max-w-max">
                            {paymentStatus}
                          </Badge>
                        )}
                      </Table.Cell>
                      <Table.Cell className="font-bold text-green-600">${paymentTotal}</Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>
          </main>
        </article>
      </SectionLayout>
    </section>
  )
}

export default OrderPage
