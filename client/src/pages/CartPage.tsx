import { useState, useEffect, useContext } from 'react';
import { Typography, Button, Box, Grid, Paper, List, ListItem, ListItemText, Container } from '@mui/material';
import ProductCartCard from '../components/ProductCartCard';
import cartsAPI from '../api/cartsAPI';
import CircularProgress from '@mui/material/CircularProgress';
import * as cartLocalStorageUtils from '../utils/cartLocalStorageUtils';
import CartItem from '../types/CartItem';
import { toastError, toastSuccess } from '../utils/toastUtils';
import { UserContext } from '../UserContext';
import Paypal from '../components/Paypal';
import { v4 as uuidv4 } from 'uuid';
// import sendCartToOms from "../api/cartsAPI";
const CartPage = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [emptyCart, setEmptyCart] = useState(true);
    const context = useContext(UserContext)!;
    const { userInfo, setProductsInCart } = context
    const [totalAmount, setTotalAmount] = useState<number>(0);
    useEffect(() => {
        const fetchCart = async () => {
            try {
                if (userInfo) {
                    const cartData = await cartsAPI.getCart();
                    setCartItems(cartData[0].items);                    
                } else {
                    const localCart = cartLocalStorageUtils.getCart();
                    if (localCart) {
                        setCartItems(localCart);
                    } else {
                        setCartItems([]);
                    }
                }
            } catch (error) {
                console.error('Error fetching cart:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCart();
    }, [userInfo, emptyCart]);
    useEffect(() => {
        if (cartItems.length !== 0) {
            const total = cartItems.reduce((sum, item) => {
                return sum + item.quantity * item.salePrice;
            }, 0);
            setTotalAmount(total);
        }
    }, [cartItems]);

    const removeCart = async () => {
        cartsAPI.deleteCart(); 
        setCartItems([])
    }

    const removeFromCart = async (productId: string) => {
        try {
            if (userInfo) {
                await cartsAPI.deleteProductFromCart(productId);
                const newCart = await cartsAPI.getCart();
                setProductsInCart(newCart[0].items.length);
                setCartItems(newCart[0].items);
            } else {
                cartLocalStorageUtils.removeFromCart(productId);
                const newCart = cartLocalStorageUtils.getCart();
                setProductsInCart(newCart.length);
                setCartItems(newCart);
            }
            toastSuccess('Product removed from cart');
        } catch (error) {
            console.error('Error removing from cart:', error);
            toastError('Error removing product from cart');
        }
    };
    const buyNow = async () => {
        if (userInfo) {
            console.log('Product purchased!');
            alert(`Total Amount: ${totalAmount.toFixed(3)}`);
            const newCart = await cartsAPI.deleteCart();
            setProductsInCart(newCart.items.length);
            setCartItems(newCart.items);
        } else {
            cartLocalStorageUtils.clearCart();
            setCartItems([])
            setProductsInCart(0);
            alert(`Total Amount: $ ${totalAmount.toFixed(3)}`);
        };
    }
    const updateCartItemQuantity = (productId: string, newQuantity: number) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.productid === productId ? { ...item, quantity: newQuantity } : item
            )
        );
        const total = cartItems.reduce((sum, item) => {
            return sum + item.quantity * item.salePrice;
        }, 0);
        setTotalAmount(total);
    };
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }
    // console.log(cartItems);
    if (cartItems.length === 0) {
        return <Typography variant="h2">No items in the cart</Typography>;
    }
    return (
        <Grid container spacing={3} style={{ display: 'flex', alignItems: 'start' }}>
            <Grid item xs={8}>
                {cartItems.map((item) => (
                    // console.log("item.productid", item),
                    <ProductCartCard
                        key={'ProductCartCard-' + uuidv4()}
                        product={item}
                        quantity={item.quantity}
                        removeFromCart={removeFromCart}
                        totalAmount={totalAmount}
                        setTotalAmount={setTotalAmount}
                        updateCartItemQuantity={updateCartItemQuantity}
                    />
                ))}
            </Grid>
            <Grid item xs={4}>
                <Paper sx={{ padding: '16px', position: 'sticky', right: '0', transform: 'translateY(20px)', }}>
                    <List>
                        <ListItem>
                            <ListItemText primary={`Number of Items: ${cartItems.length}`} />
                        </ListItem>
                        {cartItems.map((item) => (
                            <ListItem key={`ListItem-${uuidv4()}`}>
                                <ListItemText
                                    primary={item.name}
                                    secondary={`Quantity: ${item.quantity} | Total Price: $${(item.quantity * item.salePrice).toFixed(3)}`}
                                />
                                {/* <img src={item.product_id.image.url} alt={item.product_id.name} style={{ maxWidth: '50px', maxHeight: '50px', marginRight: '1rem' }} /> */}
                            </ListItem>
                        ))}
                        <ListItem>
                            <ListItemText primary="Total Amount" />
                            <Typography variant="h5" sx={{ marginLeft: '1rem' }}>
                                ${totalAmount.toFixed(3)}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Container>
                                <Button sx={{ width: "100%", marginBottom: 1 }} variant="contained" onClick={buyNow}>
                                    Buy Now
                                </Button>
                                <Button sx={{ width: "100%", marginBottom: 1 }} variant="contained" onClick={removeCart}>
                                delete Cart
                                </Button>
                                <Paypal />
                            </Container>
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
        </Grid>
    );
};
export default CartPage;
