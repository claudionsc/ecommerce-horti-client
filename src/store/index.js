import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartItems: [],
    frutaTotal: [],
    cartTotal: 0
}

export const showFrutas = createAction('showFrutas')
export const addQtd = createAction('addQtd')
export const removeFrutas = createAction('showFrutas')

const FrutasReducers = createReducer(INITIAL_STATE, {
    [showFrutas]: (state, action) => {

    // state.cartItems.push(action.payload)


        const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
        );        

        if (itemIndex >= 0) {
            state.cartItems[itemIndex].cartQtd += 1
        } else {

            const qtd = { ...action.payload, cartQtd: 1 };
            state.cartItems.push(qtd)
        }


    },


    // [addQtd]: (state, action) => {
    //     const addToCart = state.frutasTotal.push(...state, action)
    // }
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