import React from 'react';
import {Link} from 'react-router-dom';

export default function Home () {
    return (
        <section className="home">
            <div className="dark-overlay">
                <div className="home-inner">
                    <h1 className="x1">
                        Professional development
                    </h1>
                    <p className="cta">
                        Learn more, earn more !
                    </p>
                    <div className="buttons">
                        {/* <Link to={'/register'} className="btn btn-primary">Register</Link>
                        <a href='login.html' className="btn btn-light">Login</a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
 