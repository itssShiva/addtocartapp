import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
}

export const cartSlice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart:(state,actions)=>{
            console.log(actions.payload)
            state.cartItems.push(actions.payload
            );
        }
    }

});

export const {addToCart}=cartSlice.actions;
export default cartSlice.reducer;