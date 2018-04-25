import React from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import CategoryScreen from './CategoryScreen';
import ProductScreen from './ProductScreen';
import Login from './Login';
import Cart from './Cart';
import Register from './Register';

let Router = () =>
<HashRouter>
    <div>
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/categories/:categoryName" exact component={CategoryScreen} />
            <Route path="/products/:productId" exact component={ProductScreen} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/cart" exact component={Cart} />
        </Switch>
    </div>
</HashRouter>

export default Router;


// <Route path="/users/tweets" render={() => <GroupFeed />} />
//     <Route path="/users/:userId" exact render={({ match }) => <Profile match={match} />} />
//     <Route path="/users/:userId/tweets" render={({ match }) => <UserFeed match={match} />} />