import React from 'react'


function Header(){
    return(
        <header className='header'>
            <div className='logo'>
                <a href="#">
                    <h2 className='logo-h2'>Alexanderagu.dev</h2>
                </a>
            </div>

            
            <nav className='navbar'>

                <ul className='nav-list'>
                    <li className='nav-items'>
                        <a href="#" className='nav-links'>Home</a>
                    </li>
                    <li className='nav-items'>
                        <a href="#about" className='nav-links'>About</a>
                    </li>
                    <li className='nav-items'>
                        <a href="#about" className='nav-links'>About</a>
                    </li>
                    <li className='nav-items'>
                        <a href="#about" className='nav-links'>About</a>
                    </li>
                    <li className='nav-items'>
                        <a href="#about" className='nav-links'>About</a>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}

const styles = {

}

export default Header