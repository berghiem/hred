import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

 function Navbar(
    {
        auth : { isAuthenticated , loading},
        logout
    }
) {

  const authLinks = (
    <ul>
        <li>
            <a onClick={logout} href ='#!'>Logout</a>
        </li>
    </ul>
  );

  const guestLinks = (
    <ul>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul>
  );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <h1>
                <Link to="/"><i className="fas fa-book-reader">HRED</i></Link>
            </h1>
             {!loading && (<div>{isAuthenticated ? authLinks :guestLinks }</div>)}
 
        </nav>

    )
} 

Navbar.protoTypes = {
    logout : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    auth : state.auth
});

export default connect(mapStateToProps, {logout}) (Navbar);
