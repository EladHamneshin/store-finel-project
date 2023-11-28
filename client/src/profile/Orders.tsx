import {useContext, useEffect,useState} from 'react'
import { Typography, Box, Card } from '@mui/material';
import { GetOrderInterface, OrderInterface, OrderStatusEnum } from '../types/order';
import { Product } from '../types/Product';
import { UserContext } from '../UserContext';

const order: OrderInterface = {
  cartItems: [
  ],
  userId: 'user123',
  orderTime: new Date(),
  userName: 'John Doe',
  userEmail: 'john@example.com',
  status: OrderStatusEnum.Waiting,
  totalPrice: 250.75,
  shippingDetails: {
    address: {
      country: 'Country Name',
      city: 'City Name',
      street: 'Street Name',
      cellPhone: '1234567890',
      zipCode: '12345',
    },
    contactNumber: '0987654321',
    orderType: 'Regular',
}
}
const order2: OrderInterface = {
  cartItems: [
  ],
  userId: 'user123',
  orderTime: new Date(),
  userName: 'John Doe',
  userEmail: 'john@example.com',
  status: OrderStatusEnum.Waiting,
  totalPrice: 250.75,
  shippingDetails: {
    address: {
      country: 'Country Name',
      city: 'City Name',
      street: 'Street Name',
      cellPhone: '1234567890',
      zipCode: '12345',
    },
    contactNumber: '0987654321',
    orderType: 'Regular',
}
}
const ordersFrom = [order, order2] 


export default function Orders() {

  
    const [orders, setOrders] = useState<GetOrderInterface[]>()
    const context = useContext(UserContext)!;
    const {userInfo} = context;
    const userId = userInfo?.id;

    async function getOrders(userId:string|undefined) {
        const response = await fetch(`http://localhost:3000/${userId}`);
        const data = await response.json();
        setOrders(data);
    }

   useEffect(() => {
    getOrders(userId)
   }, [])

   return (
    <>
      <div>
        <Card sx={{ margin: 2, padding: 1 }}>
          {orders?.map((orderData: GetOrderInterface) =>
            orderData.orders.map((order: OrderInterface) => (
              <div key={order.orderTime.toString()}>
                {order.cartItems?.map((product: Product) => (
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    key={product.name}
                  >
                    <img src={product.image.url} alt={product.name} style={{ width: '100px' }} />
                    <Typography variant="h5">{product.name}</Typography>
                    <Typography variant="h5">{product.salePrice}</Typography>
                    <Typography variant="h5">{product.quantity}</Typography>
                  </Box>
                ))}
              </div>
            ))
          )}
        </Card>
      </div>
    </>
  );
  
}