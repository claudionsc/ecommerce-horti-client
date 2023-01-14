import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotal: 0
}

// ACTIONS 
export const showFrutas = createAction('showFrutas')
export const addQtd = createAction('addQtd')
export const removeFrutas = createAction('removeFrutas')
export const cleanCart = createAction('cleanCart')
export const decreaseCart = createAction('decreaseCart')
export const getTotals = createAction('getTotals')

// REDUCERS 
const FrutasReducers = createReducer(INITIAL_STATE, {
    [showFrutas]: (state, action) => {

        const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
        );

        if (itemIndex >= 0) {
            state.cartItems[itemIndex].cartQtd += 1
        } else {
            
            const qtd = { ...action.payload, cartQtd: 1 };
            state.cartItems.push(qtd)
        }

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal))

    },

    [removeFrutas]: (state, action) => {
        const nextCartItem = state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id
        )
        state.cartItems = nextCartItem
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

    },

    [decreaseCart]: (state, action) => {
        const itemIndex = state.cartItems.findIndex(
            cartItem => cartItem.id === action.payload.id 
        )

        if(state.cartItems[itemIndex].cartQtd > 1){
            state.cartItems[itemIndex].cartQtd -= 1
            
        } else if (state.cartItems[itemIndex].cartQtd === 1){

            const nextCartItem = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItem
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        
    },

    [cleanCart]: (state, action) => {
        state.cartItems = []
        state.cartTotal = 0
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    
    [getTotals]: (state, action) => {
        const { qtd } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
                const { cartQtd } = cartItem;
                cartTotal.qtd += cartQtd

                return cartTotal
            },
            {
                qtd: 0
            }
        );
        state.cartTotal = qtd
        localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal))

    }

})




const loggerMiddleware = store => next => action => {
    next(action)
}

// const confirmMiddleware = store => next => action => {
//     if (action.type === removeFrutas.type) {
//         next(action)
//     } else {
//         next(action)
//     }

// }

export default configureStore({
    reducer: {
        frutas: FrutasReducers
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware)
})