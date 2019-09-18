import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='nav-wrapper blue brighten-3'>
            <div className='container'>
                <a className='brand-logo'>Kristi</a>
                <ul className='right'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/work'>Work</Link></li>
                    <li><Link to='/resume'>Resume</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div> 
        </nav>
    )
}

export default Nav