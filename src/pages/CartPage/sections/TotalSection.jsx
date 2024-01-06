import { useEffect, useState } from 'react'
import SectionLayout from '../../../layouts/SectionLayout'
import PropTypes from 'prop-types'
import { PayPalButtons } from '@paypal/react-paypal-js'

function TotalSection({ cartItems }) {
  const [subTotal, setSubTotal] = useState(0)
  const [taxes, setTaxes] = useState(0)

  const calculateSubTotal = () => {
    return cartItems.reduce((total, product) => {
      return total + product.quantity * product.attributes.price
    }, 0)
  }

  const calculateTaxes = (subTotal) => subTotal * 0.12

  useEffect(() => {
    const newSubTotal = calculateSubTotal()
    const newTaxes = calculateTaxes(newSubTotal)
    setSubTotal(newSubTotal)
    setTaxes(newTaxes)
  }, [cartItems])

  return (
    <SectionLayout>
      <article className="max-w-screen-xl mx-auto ">
        <div className="flex flex-col gap-10 sm:flex-row">
          <div className="p-4 bg-gray-100 rounded-lg sm:w-2/4 max-h-[10rem]">
            <div className="space-y-1">
              <div className="flex justify-between gap-4 text-gray-500">
                <span>Subtotal</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between gap-4 text-gray-500">
                <span>IVA</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t">
              <div className="flex items-start justify-between gap-4 text-gray-800">
                <span className="text-lg font-bold">Total</span>

                <span className="flex flex-col items-end">
                  <span className="text-lg font-bold">${(subTotal + taxes).toFixed(2)} USD</span>
                  <span className="text-sm text-gray-500">incluído impuestos</span>
                </span>
              </div>
              <div className=""></div>
            </div>
          </div>
          <div className="sm:w-2/4">
            <PayPalButtons />
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
