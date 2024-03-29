import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SectionLayout from '../../../layouts/SectionLayout'
import ButtonWrapper from '../components/ButtonWrapper'

function TotalSection({ cartItems }) {
  const [subTotal, setSubTotal] = useState(0)
  const { userData } = useSelector((store) => store.session)

  const calculateSubTotal = () => {
    return cartItems.reduce((total, product) => {
      return total + product.quantity * parseFloat(product.attributes.price)
    }, 0)
  }

  useEffect(() => {
    const newSubTotal = calculateSubTotal()
    setSubTotal(newSubTotal)
  }, [cartItems])

  return (
    <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
      <article className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-10 sm:flex-row">
          <div className="p-4 bg-gray-100 rounded-lg sm:w-2/4 max-h-[8rem]">
            <div className="space-y-1">
              <div className="flex justify-between gap-4 text-gray-500">
                <span>Subtotal</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t">
              <div className="flex items-start justify-between gap-4 text-gray-800">
                <span className="text-lg font-bold">Total</span>

                <span className="flex flex-col items-end">
                  <span className="text-lg font-bold">${subTotal.toFixed(2)} USD</span>
                  <span className="text-sm text-gray-500">incluído impuestos</span>
                </span>
              </div>
              <div className=""></div>
            </div>
          </div>
          <div className="sm:w-2/4">
            <ButtonWrapper
              cartItems={cartItems}
              totalAmount={subTotal}
              user={userData}
              isDisabled={parseFloat(subTotal) === 0}
            />
          </div>
        </div>
      </article>
    </SectionLayout>
  )
}

TotalSection.propTypes = {
  cartItems: PropTypes.array.isRequired,
}

export default TotalSection
