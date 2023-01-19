
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

function Login(
    {
        login,
        isAuthenticated
    }
) {

    const navigate = useNavigate();

    const [formData, updateFormData] = useState(
        {
            email: "",
            password: ""
        }
    );

    const { email, password } = formData;

    const onChange = e =>
        updateFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        );

    const onSubmit = e => {
        e.preventDefault();

        console.log("awesome");
        login({ email, password });
    };

 useEffect(()=>{
    if (isAuthenticated) {

        console.log("awesome this is login page");

        return navigate("/welcome");


    } 
 }) ;
    


    return (
        <div>
            <h1 className="large text-primary">Log in</h1>
            <p className="cta"><i className="fas fa-sign-in-alt"></i>Log in</p>
            <form className="form" onSubmit={e => onSubmit(e)} >
                <div className="form-group mb-3 mx-3">
                    <input type="email" className="form-control" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group mb-3 mx-3">
                    <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} minLength="4" />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p>
                Not registered yet ? <Link to="/register">Register</Link>
            </p>
        </div>
    )
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
console.log("mapStateToProps");
console.log(mapStateToProps);

export default connect(mapStateToProps, { login })(Login);

