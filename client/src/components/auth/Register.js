 
import React, { useState } from 'react';
import {Link } from "react-router-dom";
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import {PropTypes} from 'prop-types';

 function Register(
    {
        register
    }
) {
    const [formData, updateFormData] = useState(
        {
            name: '',
            email: '',
            password: '',
            confirmpw: ''
        });

    const { name, email, password, confirmpw } = formData;

    const onChange = e => updateFormData(
        {
            ...formData,
            [e.target.name]: e.target.value
        }
    );

    const onSubmit = e => {
        e.preventDefault();
        if (password !== confirmpw) {
            console.log('Password must match');
        } else {
            console.log(formData);
            register({name, email, password});
        }
    }

    return (
        <div className=" mx-5">
            <h1 className="large text-primary">
                Register
            </h1>
            <p className="cta">
                <i className='fas fa-address-card mx-1'></i>
                Specify your account info
            </p>
            <form className="form" onSubmit={e=>onSubmit(e)}>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required/>
                </div>
                <div className="form-group  mb-3">
                    <input type="email"  className="form-control" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required/>
                </div>
                <div className="form-group  mb-3">
                    <input type="password"  className="form-control" placeholder="Password" name="password" value={password} onChange={e => onChange(e) } minLength="4" />
                </div>
                <div className="form-group  mb-3">
                    <input type="password"  className="form-control" placeholder="Confirm Password" name="confirmpw" value={confirmpw} onChange={ e=> onChange(e)} minLength="4" />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />

                
            </form>
            <p >
                Already have an account ? <Link to="/login">Log in</Link>
            </p>

        </div>
    )
};
Register.propTypes ={
    register : PropTypes.func.isRequired,
};
export default connect(null , {register})(Register);
