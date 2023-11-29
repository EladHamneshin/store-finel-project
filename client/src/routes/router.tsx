import ROUTES from "./routesModel";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import App from "../App";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import ComparePage from "../pages/ComparePage";
import Account from "../profile/Account";
import Shipment from "../profile/Shipment";
import Orders from "../profile/Orders";
import CustomerService from "../profile/CustomerService";
import Addrees from "../profile/Addrees";
import WishList from "../profile/WishList";

// import CheckoutPage from "../pages/Checkout/CheckoutPage";
import CategoryPage from "../pages/CategoryPage";
import Profile from "../profile/Profile";
import BannerTop from "../banners/BannerTop";


const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<App />}>
                <Route index={true} path={ROUTES.HOME} element={<HomePage/>} /> 
                {/* <Route path={ROUTES.LOGIN} element={<LoginPage/>} /> */}
                 {/* <Route path={ROUTES.REGISTER} element={<RegisterPage/>} /> */}
                {/* <Route path={ROUTES.CATEGORY} element={<CategoryPage/>} /> */}
                <Route path={ROUTES.PRODUCT} element={<ProductPage/>} />
                <Route path={ROUTES.CART} element={<CartPage/>} />
                <Route path={ROUTES.COMPARE} element={<ComparePage/>} />    
                <Route path={ROUTES.ACCOUNT} element={<Account/>} />    
                <Route path={ROUTES.SERVICE} element={<CustomerService/>} />    
                <Route path={ROUTES.ORDERS} element={<Orders/>} />    
                <Route path={ROUTES.SHIPMENT} element={<Shipment/>} />    
                <Route path={ROUTES.ADDRESS} element={<Addrees/>} />    
                <Route path={ROUTES.WISHLIST} element={<WishList/>} />    
                <Route path={ROUTES.PROFILE} element={<Profile/>} />    
                {/* <Route path={ROUTES.CHECKOUT} element={<CheckoutPage/>} />      */}
            <Route path={ROUTES.DEFAULT} element={<h1>404 Not Found</h1>} />
            </Route>
        </Routes>
    );
}; 

export default Router;