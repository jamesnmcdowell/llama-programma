import React from 'react';
import EnhancedForm from './LoginForm'
import Header from './Header';
import Shell from './Shell';
import { Link } from 'react-router-dom';

let Login = () =>
    <Shell>
    <EnhancedForm 
        initialState={{
        email: '',
        password: ''
        }}/>
    </Shell>

export default Login;