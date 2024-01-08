import { Table, TextInput } from 'flowbite-react'
import SectionLayout from '../../layouts/SectionLayout'

function OrderPage() {
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
                <Table.HeadCell>Fecha</Table.HeadCell>
                <Table.HeadCell>Estado</Table.HeadCell>
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>Método de Pago</Table.HeadCell>
                <Table.HeadCell>Total</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="font-medium text-gray-900">Apple MacBook Pro 17</Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>Laptop</Table.Cell>
                  <Table.Cell>PayPal</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </main>
        </article>
      </SectionLayout>
    </section>
  )
}

export default OrderPage
