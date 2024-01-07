import { useSelector } from 'react-redux'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import TableSection from './sections/TableSection'
import TotalSection from './sections/TotalSection'

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
      <TableSection cartItems={cartItems} />
      <TotalSection cartItems={cartItems} />
    </article>
  )
}

export default CartPage
