import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify' // Ensure you have react-toastify installed and configured

function useAddToCart(product) {
  const dispatch = useDispatch()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = (quantity = 1) => {
    setIsAdding(true)

    setTimeout(() => {
      if (product.attributes.quantity === 0) {
        toast.error('Lo sentimos, el producto no cuenta con stock.', { theme: 'colored', autoClose: 1000 })
        setIsAdding(false)
        return
      }

      dispatch(
        cartActions.addItemToCart({
          item: product, // Pass the product as the item
          quantity: quantity, // Assuming adding one item at a time
        }),
      )

      setIsAdding(false)
    }, 1500) // Simulates a network request delay
  }

  return {
    isAdding,
    handleAddToCart,
  }
}

export default useAddToCart
