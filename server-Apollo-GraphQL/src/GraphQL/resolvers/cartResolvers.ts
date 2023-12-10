import cartDal from "../../dal/cartDal.js"
import Product from "../../types/Product.js";
interface ResolverArgs {
    userid: string;
    pid: string;
    product:Product;
    quantityOfProduct:number
}
export const cartResolvers = {
   
    Query:{
        getCart: async(_:any,{userid}:ResolverArgs) =>{
            try{
                const cart = await cartDal.getCart(userid);
                return cart;
            }
            catch(err){
                throw err;
            }
        },
        deleteProductFromCart: async(_:any,{pid,userid}:ResolverArgs) =>{
            try{
                const cart = await cartDal.deleteCartItem(pid,userid);
                return cart;
            }
            catch(err){
                throw err;
            }
        }
    },
    Mutation:{
        updateCart: async(_:any,{userid,pid,product,quantityOfProduct}:ResolverArgs) =>{
            try{
                const cart = await cartDal.updateCart(userid,product,quantityOfProduct);
                return cart;
            }
            catch(err){
                throw err;
            }
        }
    }

}