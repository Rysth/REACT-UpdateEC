import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { useDispatch } from 'react-redux'
import { createOrder } from '../../../redux/slices/orderSlice'
import { cartActions } from '../../../redux/slices/cartSlice'
import PropTypes from 'prop-types'

const ButtonWrapper = ({ cartItems, totalAmount, user, isDisabled }) => {
  const dispatch = useDispatch()
  const [{ isPending }] = usePayPalScriptReducer()

  const createOrderHandler = async (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: totalAmount.toString(),
            },
          },
        ],
      })
      .then((orderId) => {
        return orderId
      })
  }

  const onApproveHandler = async (data, actions) => {
    const orderDetails = await actions.order.capture()
    const orderData = {
      date: new Date().toISOString(), // Current date
      products: cartItems.map((item) => item.id),
      user: user.id,
    }
    const paymentData = {
      payment_id: orderDetails.id,
      payment_status: orderDetails.status,
      payer_id: orderDetails.payer.payer_id,
      currency: orderDetails.purchase_units[0].amount.currency_code,
      amount_paid: orderDetails.purchase_units[0].amount.value,
    }
    dispatch(createOrder({ orderData, paymentData }))
    dispatch(cartActions.clearCart())
  }

  return (
    <>
      {isPending && <div>Loading...</div>}
      <PayPalButtons
        style={{ layout: 'vertical' }}
        createOrder={createOrderHandler}
        onApprove={onApproveHandler}
        disabled={isDisabled}
      />
    </>
  )
}

ButtonWrapper.propTypes = {
  cartItems: PropTypes.array.isRequired,
  totalAmount: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool.isRequired,
}

export default ButtonWrapper
