import React from 'react'
import logo from '../../assets/download.png'
import reactLogo from '../../logo.svg'
import {Link} from 'react-router-dom'
import Logout from '../logout/index'
import SearchContact from '../search-contact/search-contact'
import './style.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo_container">
                <img className="logo" src={reactLogo} alt="logo"/>
                <p>Truly Contacts</p>
            </div>
            <div className="search_container">
                <SearchContact />
            </div>
            <div className="create_logout_btn_container">
                <Link to="/createContact"><button className="createContactBtn">Create Contacts</button></Link>
                <Logout />
            </div>
        </nav>
    )
}

export default Navbar
