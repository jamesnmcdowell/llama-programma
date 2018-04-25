import React, { Component } from 'react';
import enhanceForm from './enhanceForm';
import { Link } from 'react-router-dom';

export const RegisterForm = ({ state, handleSubmit, handleChange }) =>
    <form className="login-form" onSubmit={handleSubmit}>
        <label> Email </label>
        <div>
            <input
                type="text" name="email"
                value={state.email}
                onChange={handleChange}
                required="" />
        </div>
        <br />
        <label> Password </label>
        <div>
            <input
                type="text"
                name="password"
                value={state.password}
                onChange={handleChange}
                required="" />
        </div>
        <br/>
        <button>Create Account</button>
        <br/>
        <Link className="login-btn" to="/login">Login</Link>
    </form>

const EnhancedForm = enhanceForm(RegisterForm);

export default EnhancedForm;