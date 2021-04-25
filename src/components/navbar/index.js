import React from 'react'
import logo from '../../assets/download.png'
import {Link} from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo_container">
                <img className="logo" src={logo} alt="logo"/>
                <p>Truly Contacts</p>
            </div>
            <div className="search_container">
                <input type="search" name="search" id="search_input"/>
            </div>
            <div className="create_logout_btn_container">
                <Link to="/createContact"><button>Create Contacts</button></Link>
                <button>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar
