import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "@/types/cartProduct";

interface CartState {
    products: Array<CartProduct>,
    totalQuantity: number,
    totalAmount: number,
}

const initialState: CartState = {
    products: [],
    totalQuantity: 0,
    totalAmount: 0,
}

/* Updates that should happen
Cart
    total amount
    total quantity
Product
    quantity
    price
 */

export const cartSlice = createSlice({
    name: "cart",
    initialState, // initialState: initialState
    reducers: {

        addToCart(state, action: PayloadAction<{ product: CartProduct, quantity: number }>) {

            const ap = action.payload

            const existingProduct = state.products.find((product) => product._id === ap.product._id)

            const amount = ap.product.price * ap.quantity

            // cart
            state.totalAmount += amount
            state.totalQuantity += ap.quantity

            // product
            if (existingProduct) {
                const amountToAdd = ap.product.price * ap.quantity

                existingProduct.totalPrice += amountToAdd
                existingProduct.quantity += ap.quantity
            } else {
                state.products.push(ap.product)
            }
        },

        subtractFromCart(state, action: PayloadAction<string>) {

            const ap = action.payload;

            const existingProduct = state.products.find((product) => product._id === ap)

            // cart
            state.totalQuantity--;
            state.totalAmount -= existingProduct?.price!

            // product
            if (existingProduct !== undefined) {

                if (existingProduct.quantity === 1) {
                    state.products = state.products.filter((product) => product._id !== existingProduct._id)
                } else {
                    existingProduct.quantity--;
                    existingProduct.totalPrice -= existingProduct.price
                }
            } else {
                alert("Something went wrong, Check Console")
                console.log("Existing Product is undefined")
            }
        },

        deleteFromCart(state, action: PayloadAction<string>) {
            const ap = action.payload;

            const existingProduct = state.products.find((product) => product._id === ap)

            // cart
            if (existingProduct !== undefined) {
                state.totalAmount -= existingProduct?.totalPrice
                state.totalQuantity -= existingProduct?.quantity

            } else {
                alert("Something went wrong, Check Console")
                console.log("Existing Product is undefined")
            }

            // product
            state.products.filter((product) => product._id !== ap)
        },
        reset: state => {
            state = initialState
        }
    }
})

export const { addToCart, subtractFromCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer
