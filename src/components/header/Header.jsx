import React, { useRef } from 'react'
import "./header.css"
import { Container, NavItem } from 'reactstrap'
import { Link } from 'react-scroll'

const navLinks = [
    {
        display: 'Home',
        url: 'home'
    },
    {
        display: 'About',
        url: 'about'
    },
    {
        display: 'Menu',
        url: 'menu'
    },
    {
        display: 'Review',
        url: 'review'
    },
    {
        display: 'Contact',
        url: 'contact'
    }
]
const Header = () => {

    const menuRef = useRef()

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')
    return (
        <header className="header">
            <Container>
                <div className="navigation">
                    <div className="logo">
                        <h2 className="d-flex align-items-center gap-1">
                            <span>
                                <i className="ri-restaurant-2-line"></i> </span> Patil Food

                        </h2>
                    </div>
                    <div className="nav__menu " ref={menuRef}>
                        <div className="nav__list__wrapper d-flex align-items-center gap-5">
                            <ul className="nav__list">
                                {navLinks.map((item, index) => (
                                    <li className='nav__item' key={index}>
                                        {/* <a href={item.url} onClick={menuToggle}>{item.display}</a> */}
                                        <Link className='link' to={item.url} onClick={menuToggle}>{item.display}</Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="menu__right">
                                <div className="custom__search">
                                    <input type="text" placeholder='search item....' />
                                    <span><i className="ri-search-line"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <span className='cart__icon'>
                            <i className="ri-shopping-basket-line"></i>
                            <span className="badge">2</span>
                        </span>


                    </div>

                    <div className="mobile__menu">
                        <span><i className="ri-menu-line" onClick={menuToggle}></i></span>
                    </div>
                </div>
            </Container>


        </header>
    )
}

export default Header