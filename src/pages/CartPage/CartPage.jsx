import TableSection from './sections/TableSection'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'

function CartPage() {
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
      <TableSection />
    </article>
  )
}

export default CartPage
