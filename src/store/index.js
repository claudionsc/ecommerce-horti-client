import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartItems: [],
    cartTotal: 0
}

export const showFrutas = createAction('showFrutas')
export const addQtd = createAction('addQtd')
export const removeFrutas = createAction('showFrutas')

const FrutasReducers = createReducer(INITIAL_STATE, {
    [showFrutas]: (state, action) => {

        const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
        )

        if (itemIndex >= 0) {
            state.cartItems[itemIndex].cartTotal += 1
        } else {

            const qtd = { ...action.payload, cartTotal: 1 }
            state.cartItems.push(qtd)
        }

    },
    [addQtd]: (state, action) => {
        const addToCart = state.cartTotal.push(action.payload)
    }
    // [removeFrutas]: (state, action) =>
    //     state.filter((u) => u.id !== action.payload),
})




const loggerMiddleware = store => next => action => {
    console.log(action)
    next(action)
}

const confirmMiddleware = store => next => action => {
    if (action.type === removeFrutas.type) {
        // if(window.confirm("Deseja realmente excluir?")){
        next(action)
        // }
    } else {
        next(action)
    }
}

export default configureStore({
    reducer: {
        frutas: FrutasReducers
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware)
            .concat(confirmMiddleware)
})