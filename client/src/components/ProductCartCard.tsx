import { Typography, CardContent, Box, IconButton, Card } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import cartsAPI from '../api/cartsAPI';
import { Product } from '../types/Product';
import * as cartLocalStorageUtils from '../utils/cartLocalStorageUtils';
import { toastError } from '../utils/toastUtils';
import { UserContext } from '../UserContext';
import type CartItem from '../types/CartItem';

type Props = {
    product: CartItem;
    quantity: number;
    removeFromCart: (productId: string) => Promise<void>;
    totalAmount: number;
    setTotalAmount: Dispatch<SetStateAction<number>>;
    updateCartItemQuantity: (productId: string, newQuantity: number) => void; // Add prop for updating quantity
};

const ProductCartCard = ({ product, quantity, removeFromCart, totalAmount, setTotalAmount, updateCartItemQuantity }: Props) => {
    const [cartQuantity, setCartQuantity] = useState<number>(quantity);
    const context = useContext(UserContext)!;
    const { userInfo } = context

    
    console.log("hi from ProductCartCard:", quantity);
    
    const increaseQuantity = async (productId: string) => {
        if (cartQuantity < product.quantity) {
            console.log("hi from ProductCartCard, cartQuantity:", cartQuantity, "product.quantity:", product.quantity);
            try {
                if (userInfo) {
                    await cartsAPI.updateQuantity(productId, 'inc');
                } else {
                    cartLocalStorageUtils.incQuantityOfProduct(productId);
                }
                setCartQuantity(cartQuantity + 1);
                setTotalAmount(totalAmount + product.salePrice);
                console.log("hello from increaseQuantity:", cartQuantity);

                updateCartItemQuantity(productId, cartQuantity + 1);
            } catch (error) {
                console.error('Error increasing quantity:', error);
            }
        } else {
            toastError(`There are only ${product.quantity} items available for purchase`);
        }
    };

    const decreaseQuantity = async (product: CartItem) => {
        console.log("hi from ProductCartCard, cartQuantity:", cartQuantity, "product.quantity:", product.quantity);
        if (cartQuantity > 1) {
            try {
                if (userInfo) {
                    await cartsAPI.updateQuantity(product.productid, 'dec');
                } else {
                    cartLocalStorageUtils.decQuantityOfProduct(product.productid);
                }
                setCartQuantity(cartQuantity - 1);
                setTotalAmount(totalAmount - product.salePrice);
                
                
                updateCartItemQuantity(product.productid, cartQuantity - 1);
                console.log("hello from decreaseQuantity:", cartQuantity);
            } catch (error) {
                console.error('Error decreasing quantity:', error);
            }
        } else {
            toastError('Quantity cannot be less than 1');
        }
    };

    const deleteFromCart = async (id: string) => {
        console.log("hello from ProductCartCard, deleteFromCart:", id);
        console.log("hello from ProductCartCard, deleteFromCart,  product:", product);

        await removeFromCart(id);
    };

    return (
        <Card sx={{ margin: 2, padding: 1 }}>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <Box>
                    {/* <img src={product.image.url} alt={product.name} style={{ width: '100px' }} /> */}
                </Box>

                <Box flexGrow={1}>
                    <CardContent>
                        <Typography variant="h5">{product.name}</Typography>
                        <Typography variant="body1">{product.description}</Typography>
                        <Typography variant="body2">{`Price: ${product.salePrice}`}</Typography>
                    </CardContent>
                </Box>

                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <IconButton onClick={() => increaseQuantity(product.productid)}>+</IconButton>
                    <Typography variant="body1">{cartQuantity}</Typography>
                    <IconButton onClick={() => decreaseQuantity(product)}>-</IconButton>
                </Box>

                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <IconButton onClick={() => deleteFromCart(product.productid)}>
                        <DeleteForeverIcon />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
};

export default ProductCartCard;
