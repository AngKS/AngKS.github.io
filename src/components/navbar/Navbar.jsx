import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showBtn = () => {
        if (window.innerwidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    useEffect(() => {
        showBtn()
    }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <a className="nav-links" href="#about" onClick={closeMobileMenu}></a>
                            </li>
                            <li className="nav-item">
                                <a href="#project" className="nav-links" onClick={closeMobileMenu}></a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-links" onClick={closeMobileMenu}></a>
                            </li>
                        </ul>
                        
                </div>
            </nav>
        </div>
    )
}

export default Navbar
