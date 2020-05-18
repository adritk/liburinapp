import React, { Component } from 'react';
import '../Styles/Navbar.css'

class Navbar extends Component {
    render() { 
        return ( 
            <nav id="myNavbar">
                <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                <label className="logo">Design x</label>
                <ul>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">Tour Domestik</a></li>
                    <li><a href="/#">Tiket Atraksi</a></li>
                    <li><a href="/#">About Us</a></li>
                    <li><a className="active" href="/#">Login</a></li>
                    <li><a href="/#">Register</a></li> 
                </ul>
            </nav>
         );
/* 1154 */

    }
}
 
export default Navbar;