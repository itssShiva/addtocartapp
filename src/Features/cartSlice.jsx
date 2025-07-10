import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    TotalPrice:0,
    TotalQuantity:0,
}

export const cartSlice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart:(state,actions)=>{
         const find=state.cartItems.findIndex((value)=>{
            return value.id==actions.payload.id;
           });

           if(find!=-1){
            state.cartItems[find]={...state.cartItems[find],quantity:state.cartItems[find].quantity+1,
            };
           }
          else{
            state.cartItems.push({...actions.payload,quantity:1})
          } 
        },
       deleteCartItem: (state, action) => {
  const id = Number(action.payload);
  state.cartItems = state.cartItems.filter((item) => item.id !== id);
},
cartTotalPrice:(state)=>{    
   const{totalPrice,totalQuantity}= state.cartItems.reduce((carTotal,cartItem)=>{
       const{quantity,price} =cartItem
       const itemsTotal=parseFloat(price)*parseFloat(quantity);
       carTotal.totalPrice+=itemsTotal;
       carTotal.totalQuantity+=quantity;
       return carTotal;
    },{
        totalPrice:0,
        totalQuantity:0,
    });

    state.TotalPrice=totalPrice;
    state.TotalQuantity=totalQuantity;
}

 
    }

});

export const {addToCart,deleteCartItem,cartTotalPrice}=cartSlice.actions;
export default cartSlice.reducer;