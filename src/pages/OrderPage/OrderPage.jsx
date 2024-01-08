import { Badge, Table, TextInput } from 'flowbite-react'
import SectionLayout from '../../layouts/SectionLayout'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchOrders } from '../../redux/slices/orderSlice'

function OrderPage() {
  const dispatch = useDispatch()
  const { userData } = useSelector((store) => store.session)
  const { ordersArray } = useSelector((store) => store.order)

  useEffect(() => {
    dispatch(fetchOrders(userData.id))
  }, [userData])

  return (
    <section>
      <SectionLayout>
        <article className="max-w-screen-xl py-12 mx-auto space-y-10">
          <header className="grid gap-3">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Mis Ordenes</h2>
            <TextInput placeholder="Buscar..." className="max-w-sm" />
          </header>
          <main className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className="min-w-[10rem]">Fecha</Table.HeadCell>
                <Table.HeadCell>Estado</Table.HeadCell>
                <Table.HeadCell>Factura ID</Table.HeadCell>
                <Table.HeadCell className="min-w-[10rem]">Método de Pago</Table.HeadCell>
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
                      <Table.Cell>{paymentID}</Table.Cell>
                      <Table.Cell>PayPal</Table.Cell>
                      <Table.Cell className="font-medium text-green-600">${paymentTotal}</Table.Cell>
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
