import React from 'react'

function Header(){
    return(
        <>
<<<<<<< HEAD
            <header style={styles.header}>
                <div style={styles.logo}>
=======
            <header className='header'>
                <div className="logo">
>>>>>>> 917428aab53561c75d1cc189dd470afe88b28550
                    <a href="#">
                        <h2 className='logo-h2'>TherealAgu.dev</h2>
                    </a>
                </div>

                <nav className='navbar'>
                    <ul className='nav-list'>
                        <li className='nav-items'>
<<<<<<< HEAD
                            <a href="#" className='home'>Home</a>
=======
                            <a href="#">Home</a>
>>>>>>> 917428aab53561c75d1cc189dd470afe88b28550
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

<<<<<<< HEAD


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

=======
>>>>>>> 917428aab53561c75d1cc189dd470afe88b28550
export default Header