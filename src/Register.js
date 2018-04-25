import React from 'react';
import EnhancedForm from './RegisterForm';
import Header from './Header';
import Shell from './Shell';
import { Link } from 'react-router-dom';

let Register = () =>
    <Shell>
        <EnhancedForm
            initialState={{
                email: '',
                password: ''
            }} />
    </Shell>

export default Register;