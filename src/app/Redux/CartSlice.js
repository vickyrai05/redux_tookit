'use client';  

import { createSlice, current } from "@reduxjs/toolkit";  

const CartSlice = createSlice({  
    name: 'Cart',  
    initialState: JSON.parse(localStorage.getItem('product')) || [],  
    reducers: {  
        add(state, action) {  
            state.push(action.payload);  
            localStorage.setItem('product' ,JSON.stringify(current(state)))
        },  
        remove(state, action) {  
            const newState = state.filter((item) => item.id !== action.payload);  
            localStorage.setItem("product", JSON.stringify(newState));  
            return newState;  
        }  
    }  
});  

export const { add, remove } = CartSlice.actions;  
export default CartSlice.reducer;