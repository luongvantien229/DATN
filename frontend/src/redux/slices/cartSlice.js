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
                toast.success('Số lượng sản phẩm tăng lên')
            } else {
                state.cartItems = [{ ...item, quantity: item.quantity }, ...state.cartItems] // Add the product with the entered quantity
                toast.success('Sản phẩm đã được thêm vào giỏ hàng')
            }
        },
        incrementQ(state, action) {
            const item = action.payload
            const existingProduct = state.cartItems.find(product => product.id === item.id)
            existingProduct.quantity += 1
            toast.success('Số lượng sản phẩm tăng lên')
        },
        decrementQ(state, action) {
            const item = action.payload
            const existingProduct = state.cartItems.find(product => product.id === item.id)
            existingProduct.quantity -= 1
            if (existingProduct.quantity === 0) {
                state.cartItems = state.cartItems.filter(product => product.id !== existingProduct.id)
            }
            toast.success('Số lượng sản phẩm giảm')
        },
        removeFromCart(state, action) {
            const item = action.payload
            state.cartItems = state.cartItems.filter(product => product.id !== item.id)
            toast.success('Sản phẩm đã được xóa khỏi giỏ hàng')
        },
    }
})

export const { addToCart, incrementQ, decrementQ, removeFromCart } = cartSlice.actions
const cartReducer = cartSlice.reducer
export default cartReducer
