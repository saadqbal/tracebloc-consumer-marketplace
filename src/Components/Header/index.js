import { Button } from 'bootstrap';
import React from 'react';
import './style.css';
import logo from '../../images/tracebloc.webp'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-color" >
            <button className="navbar-toggler pull-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand" href="#">
                <img src={logo} height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
        
        <div className="collapse navbar-collapse pull-sm-left" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100">
                <li className="nav-item active" style={{ flex: 'auto'}}>
                    <a className="nav-link" href="#">DATA OCEAN <span className="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Header;