import React from 'react';
import { Link } from 'react-router-dom';





export const NavBar = () => {




    




    return (


        <nav className="navbar navbar-expand-sm bg-body-tertiary">

            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link" aria-current="page" href="#">Home</Link>
                    <Link to="/about" className="nav-link" href="#">About</Link>
                    <Link to="/login" className="nav-link" href="#">Login</Link>
                </div>
            </div>
           
        </nav>


    );
};
