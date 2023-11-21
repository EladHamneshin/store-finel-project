import Paypal from '../components/Paypal'
import { useParams } from 'react-router-dom'



const CheckoutPage = () => {
  const { totalAmount } = useParams()

  return (
    <Paypal product={{ description: 'Payment', price: `${totalAmount}` }} />
  )
}

export default CheckoutPage