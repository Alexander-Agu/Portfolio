import React from 'react'

function Header(){
    return(
        <>
            <header style={styles.header}>
                <div style={styles.logo}>
                    <a href="#">
                        <h2 className='logo-h2'>TherealAgu.dev</h2>
                    </a>
                </div>

                <nav className='navbar'>
                    <ul className='nav-list'>
                        <li className='nav-items'>
                            <a href="#" className='home'>Home</a>
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



const styles = {
header : {
    height: 65,
    padding: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
},

logo    : {
    color: "#4ef037",
    textDecoration: "none",
    fontSize: 20,
}}

export default Header