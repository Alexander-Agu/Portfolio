import React from 'react'

function Header(){
    return(
        <>
            <header className='header'>
                <div className="logo">
                    <a href="#">
                        <h2 className='logo-h2'>TherealAgu.dev</h2>
                    </a>
                </div>

                <nav className='navbar'>
                    <ul className='nav-list'>
                        <li className='nav-items'>
                            <a href="#">Home</a>
                        </li>
                        <li className='nav-items'>
                            <a href="#about">About</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header