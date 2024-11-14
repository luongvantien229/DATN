import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coupon: JSON.parse(localStorage.getItem('coupon')) || null,
};

export const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {

        applyCoupon(state, action) {
            const { discount, condition, code, used } = action.payload;

            if (discount !== undefined && condition !== undefined) {
                state.coupon = {
                    number: discount,
                    condition: condition,
                    code: code,
                    used: used,
                };
                toast.success('Mã giảm giá đã được áp dụng!');
                localStorage.setItem('coupon', JSON.stringify(state.coupon)); // Save coupon to localStorage
            } else if (used === true) { // Assuming `used` is `true` if the coupon has been used
                toast.error('Mã giảm giá đã được sử dụng, vui lòng nhập mã khác!');
            } else {
                toast.error('Mã giảm giá không hợp lệ hoặc đã hết hạn!');
            }
        },



        clearCoupon(state) {
            state.coupon = null;
            toast.info('Mã giảm giá đã được xóa!');
            localStorage.removeItem('coupon'); // Remove coupon from localStorage
        },
    }
});

export const {

    applyCoupon,
    clearCoupon
} = couponSlice.actions;

const couponReducer = couponSlice.reducer;
export default couponReducer;