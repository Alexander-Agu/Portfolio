import React from 'react'

function Header(){
    return(
        <header style={styles.header}>
            <div>
                <a href="#" style={styles.logo}>
                    <h2>Alexanderagu.dev</h2>
                </a>
            </div>

            <nav>
                <ul style={styles.navList}>
                    <li style={styles.navItems}>
                        <a href="#" style={styles.navLinks}>Home</a>
                    </li>
                    <li style={styles.navItems}>
                        <a href="#about" style={styles.navLinks}>About</a>
                    </li>
                </ul>
            </nav>
        </header>
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
    },

    navbar  : {

    },

    navList : {

        display: "flex",
        justifyContent: "spaceBetween",
        alignItems: "center",
        gap: 12,
    },

    navItems    : {
        listStyle: "none",
    },

    navLinks    : {
        textDecoration: "none",
        color: "black",
        fontSize: 18,
    }
}

export default Header