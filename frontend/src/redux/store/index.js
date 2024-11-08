import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import couponReducer from "../slices/couponSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        coupon: couponReducer
    }
})

export default store