import React, { Component } from 'react';
import LogoLiburin from '../Images/logoliburin.png'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'

class Navbar extends Component {
    render() { 
        return ( 
            <nav id="myNavbar">
                <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <img src={LogoLiburin} alt="notfound" className="logoLiburin" />
                <ul>
                    <li><a href="/">Home</a></li>

                <Link to="/tourdomestik" style={{textDecoration: 'none'}}>
                    <li><a href="/#">Tour Domestik</a></li>
                </Link>

                <Link to="/tiketatraksi" style={{textDecoration: 'none'}}>
                    <li><a href="/#">Tiket Atraksi</a></li>
                </Link>
                    {/* <li><a href="/#">About Us</a></li> */}

                <Link to="/login"> 
                    <li>
                        <a className="active" href="/#">Login</a>
                    </li>
                </Link>

                <Link to="/register" style={{textDecoration: 'none'}}>
                    <li><a href="/#">Register</a></li> 
                </Link>
                </ul>
            </nav>
         );
/* 1154 */

    }
}
 
export default Navbar;