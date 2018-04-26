import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import data from './db';
const initialState = {
    products: data.products,
    categories: data.categories,
    users: [],
    cart: data.cart
};

let reducer = (oldState = initialState, action) => {
    console.log(oldState, action);
    let { payload } = action;
    let {cart } = oldState;
    switch (action.type) {
        case 'ADD_TO_CART': {
            let productMatch = cart.find((product) => product.id === payload.id);
            let productsNotMatch = cart.filter((product) => product.id !== payload.id);
            let newCart;
            if (productMatch) {
                let productMod = { ...payload, quantity: productMatch.quantity + 1};
                newCart = productsNotMatch.concat([productMod]);
            }
            else {
                let productMod = { ...payload, quantity: 1 };
                newCart = cart.concat([productMod]);
            }
            return { ...oldState, cart: newCart };
            break;
        }
        default:
            return oldState;
    }
};

let store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let mapStateToProps = (state) => {
    return { tweets: state.tweets };
};
let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
};

export default store;




