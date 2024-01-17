import { Badge, Button, Modal, Table, TextInput } from 'flowbite-react'
import debounce from 'lodash/debounce'
import { useEffect, useState } from 'react'
import { HiArrowLeft, HiDocumentSearch } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import LoadingCard from '../../components/ui/LoadingCard/LoadingCard'
import SectionLayout from '../../layouts/SectionLayout'
import { fetchOrders, orderActions } from '../../redux/slices/orderSlice'

function OrderPage() {
  const dispatch = useDispatch()
  const { userData } = useSelector((store) => store.session)
  const { ordersArray, loading, orderSelected } = useSelector((store) => store.order)
  const [searchData, setSearchData] = useState('')
  const [openModal, setOpenModal] = useState(false)

  // Debounced search handler
  const debouncedSearch = debounce((newData) => {
    setSearchData(newData)
    dispatch(orderActions.searchOrder(newData))
  }, 200) // 200ms debounce time

  const onSearchChange = (event) => {
    const newData = event.target.value
    debouncedSearch(newData)
  }

  const handleOrderSelected = (orderID) => {
    dispatch(orderActions.setOrderSelected(orderID))
    setOpenModal(true)
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
      <Modal className="z-[10000]" show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="text-white bg-blue-600 rounded-t-lg ">
          <p className="text-center text-white sm:text-left">{orderSelected && `Orden #${orderSelected.id}`}</p>
        </Modal.Header>
        <Modal.Body>
          <div className="grid gap-2 rounded sm:grid-cols-2">
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="text-sm">
                <span className="font-bold">Orden:</span>{' '}
                {orderSelected && orderSelected.attributes.payment_detail.data.attributes.payment_id}
              </h4>
              <h4 className="text-sm">
                <span className="font-bold">Comprador:</span>{' '}
                {orderSelected && orderSelected.attributes.payment_detail.data.attributes.payer_id}
              </h4>
              <h4 className="text-sm">
                <span className="font-bold">Método de Pago:</span> PayPal
              </h4>
              <h4 className="text-sm">
                <span className="font-bold">Fecha:</span> {orderSelected && orderSelected.attributes.date}
              </h4>
            </div>
            <div className="row-start-1 space-y-2 sm:col-start-2">
              <h4
                className={`grid h-full py-4 text-xl font-bold text-white uppercase rounded-md place-items-center ${
                  orderSelected && orderSelected.attributes.order_status.data.id === 1
                    ? 'bg-gray-500'
                    : orderSelected && orderSelected.attributes.order_status.data.id === 2
                      ? 'bg-blue-500'
                      : 'bg-green-500'
                } `}
              >
                {orderSelected && orderSelected.attributes.order_status.data.attributes.name}
              </h4>
            </div>
          </div>
          <hr className="my-5" />
          <div className="grid grid-cols-3 mb-3 text-sm text-center">
            <p className="font-semibold">Producto</p>
            <p className="font-semibold">Cantidad</p>
            <p className="font-semibold">Subtotal</p>
          </div>
          <div className="grid gap-2">
            {orderSelected &&
              orderSelected.attributes.order_product_details.data.map((product) => {
                const productData = product.attributes
                return (
                  <div className="grid grid-cols-3 text-sm text-center" key={product.id}>
                    <a
                      href={`/shop/${productData.product.data.id}`}
                      target="_blank"
                      className="text-blue-500 underline uppercase truncate hover:text-black"
                      rel="noreferrer"
                    >
                      {productData.product.data.attributes.name}
                    </a>
                    <p>{productData.quantity}</p>
                    <p>${productData.subtotal}</p>
                  </div>
                )
              })}
          </div>
        </Modal.Body>
        <Modal.Footer className="flex items-center justify-between">
          <h4 className="text-lg">
            <span className="font-bold">Total:</span>
          </h4>
          <span className="text-lg font-bold text-green-600">
            ${orderSelected && orderSelected.attributes.payment_detail.data.attributes.amount_paid}
          </span>
        </Modal.Footer>
      </Modal>
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
                <Table.HeadCell className="text-center">Acciones</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {ordersArray.map((order, index) => {
                  const paymentID = order.attributes.payment_detail.data.attributes.payment_id
                  const paymentStatus = order.attributes.payment_detail.data.attributes.payment_status
                  const paymentTotal = order.attributes.payment_detail.data.attributes.amount_paid
                  const orderStatus = order.attributes.order_status.data.attributes.name
                  const orderStatusBadge =
                    order.attributes.order_status.data.id === 1
                      ? 'gray'
                      : order.attributes.order_status.data.id === 2
                        ? 'blue'
                        : 'green'
                  const isCompleted = paymentStatus === 'COMPLETED'

                  return (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                      <Table.Cell className="font-medium text-gray-900">{order.attributes.date}</Table.Cell>
                      <Table.Cell>{paymentID}</Table.Cell>
                      <Table.Cell>
                        <Badge color={orderStatusBadge} className="max-w-max">
                          {orderStatus}
                        </Badge>
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
                      <Table.Cell className="grid font-bold text-green-600 place-items-center">
                        <Button size="xs" color="blue" onClick={() => handleOrderSelected(order.id)} id={order.id}>
                          Ver
                        </Button>
                      </Table.Cell>
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
