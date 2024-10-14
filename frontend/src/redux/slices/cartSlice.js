import { toast } from "react-toastify"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload
            let existingProduct = state.cartItems.find(product => product.id === item.id)
            if(existingProduct) {
                existingProduct.quantity += item.quantity // Add the specified quantity
                toast.success('Product quantity increased')
            } else {
                state.cartItems = [{ ...item, quantity: item.quantity }, ...state.cartItems] // Add the product with the entered quantity
                toast.success('Product added to the cart')
            }
        },
        incrementQ(state, action) {
            const item = action.payload
            const existingProduct = state.cartItems.find(product => product.id === item.id)
            existingProduct.quantity += 1
            toast.success('Product quantity increased')
        },
        decrementQ(state, action) {
            const item = action.payload
            const existingProduct = state.cartItems.find(product => product.id === item.id)
            existingProduct.quantity -= 1
            if (existingProduct.quantity === 0) {
                state.cartItems = state.cartItems.filter(product => product.id !== existingProduct.id)
            }
            toast.success('Product quantity decreased')
        },
        removeFromCart(state, action) {
            const item = action.payload
            state.cartItems = state.cartItems.filter(product => product.id !== item.id)
            toast.success('Product removed from the cart')
        },
    }
})

export const { addToCart, incrementQ, decrementQ, removeFromCart } = cartSlice.actions
const cartReducer = cartSlice.reducer
export default cartReducer
