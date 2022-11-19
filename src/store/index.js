import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = []

export const showFrutas = createAction('showFrutas')
export const removeFrutas = createAction('showFrutas')

const FrutasReducers = createReducer(INITIAL_STATE, {
    [showFrutas]: (state, action) => [
        ...state,
        { id: state.length + 1, nome: action.payload }, 
    ],
    [removeFrutas]: (state, action) =>
        state.filter((u) => u.id !== action.payload),
})


const loggerMiddleware = store => next => action => {
    console.log(action)
    next(action)
}

const confirmMiddleware = store => next => action => {
    if(action.type === removeFrutas.type){
        if(window.confirm("Deseja realmente excluir?")){
            next(action)
        }
    }else{
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