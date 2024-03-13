import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
    cart : localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
    total: localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart : (state, value) => {
            const course = value.payload;
            const index = state.cart.findIndex((item) => item._id === course._id);

            if(index >= 0) {
                toast.error("Course Already in Cart")
                return;
            }

            state.cart.push(course);

            state.total += course.price;
            state.totalItems++;

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

        },
        removeFromCart : (state, value) => {
            const courseId = value.payload;
            const index = state.cart.findIndex((item) => item._id === courseId);

            state.total -= state.cart[index].price;
            state.cart.splice(index,1);
            state.totalItems--;

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

        },
        resetCart : (state) => {
            state.cart = [];
            state.total = 0;
            state.totalItems = 0;

            localStorage.removeItem("cart");
            localStorage.removeItem("totalItems");
            localStorage.removeItem("total");
        }
    }
})

export const {resetCart, removeFromCart, addToCart} = cartSlice.actions;
export default cartSlice.reducer;