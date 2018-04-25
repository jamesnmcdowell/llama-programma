import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import data from './db';
const initialState = {
    products: data.products,
    categories: data.categories,
    users: [],
    cart: []
};

let reducer = (oldState = initialState, action) => {
    console.log(oldState, action);
    switch (action.type) {
        case 'ADD_TO_CART': {
            let tweets = oldState.tweets.concat(['action.payload']);
            return { ...oldState, tweets: action.payload };
            break;
        }
        case 'REPLACE_DATA': {
            return { ...oldState, tweets: action.tweetsArr, users: action.usersArr };
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


// let TweetListState = connect(
//     mapStateToProps
// )(TweetList);


export default store;




