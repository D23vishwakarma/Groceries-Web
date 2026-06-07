import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const CartReducer = (state, action) => {
    switch(action.type){

    case 'ADD_ITEM': {
        const exist = state.find(item => item.name === action.payload.name)
        if(exist){
            return state.map(item => item.name === action.payload.name
                ? {...item, quantity: item.quantity + 1} : item
            )
        }
        return [...state, {...action.payload, quantity: 1}];
    }

    case 'REMOVE_ITEM':
        return state.filter(item => item.name !== action.payload.name)

    case 'CLEAR_CART':
        return []

    default:
        return state;
    }
}
const InitialCart=()=>{
    const savedcart=localStorage.getItem('cart');
    return savedcart? JSON.parse(savedcart): []
}
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(CartReducer, [],InitialCart);
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}