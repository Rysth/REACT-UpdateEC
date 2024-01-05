import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import SectionLayout from '../../layouts/SectionLayout'
import { useSelector } from 'react-redux'
import ItemCard from '../../components/ui/ItemCard.jsx/ItemCard'

function CartPage() {
  const { cartItems } = useSelector((store) => store.cart)

  return (
    <article>
      <BreadCrumb
        paths={[
          { name: 'Tienda', href: '/shop', active: false },
          {
            name: 'Carrito',
            href: `/cart`,
            active: true,
          },
        ]}
      />
      <SectionLayout>
        <article className="max-w-screen-xl py-8 mx-auto space-y-4">
          <header className="grid gap-2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Carrito de Compras</h2>
          </header>
          <main className="min-h-[24rem]">
            <div className="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg max-h-[32rem]">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-16 py-3 w-1/5 min-w-[5rem]">
                      <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3 min-w-[15rem] w-2/5">
                      Producto
                    </th>
                    <th scope="col" className="w-1/5 px-6 py-3">
                      Cantidad
                    </th>
                    <th scope="col" className="w-1/5 px-6 py-3">
                      Precio
                    </th>
                    <th scope="col" className="w-1/5 px-6 py-3">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((product, index) => (
                    <ItemCard product={product} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </article>
      </SectionLayout>
    </article>
  )
}

export default CartPage
