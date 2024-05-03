import React from 'react'


function Header(){
    return(
        <header className='header'>
            <div className='logo'>
                <a href="#">
                    <h2 className='logo-h2'>Alexanderagu.dev</h2>
                </a>
            </div>

            <input type="checkbox" id='sidebar-active'/>
                <label htmlFor="sidebar-active" className='open-sidebar-btn'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </label>

                
            <label htmlFor="sidebar-active" className='overlay'></label>
            
            <nav className='navbar'>

                <ul className='nav-list'>
                    <label htmlFor="sidebar-active" className='close-sidebar-btn'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></label>
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