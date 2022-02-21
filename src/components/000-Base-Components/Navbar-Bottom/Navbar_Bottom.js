import React, { useEffect, useState } from 'react'
import styles from './Navbar_Bottom.module.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

function Navbar_Bottom({activeComponent}) {
    const [active, setActive] = useState("")


    useEffect(() => {
        setActive(activeComponent)
        return () => {
            setActive("/")
        }
    }, [activeComponent])

    return (
        <div className={styles.navbar_bottom__container}>
            <div className={styles.navbar_bottom}>

                <div className={styles.navbar_bottom__menu_icon}>
                    <Link to="/" className={active == "/" ? (styles.active) : ""}>
                        <HomeOutlinedIcon />
                        <span>Home</span>
                    </Link>
                </div>

                <div className={styles.navbar_bottom__menu_icon}>
                    <Link to="/search" className={active == "/search" ? (styles.active) : ""}>
                        <SearchOutlinedIcon />
                        <span>Search</span>
                    </Link>
                </div>

                <div className={styles.navbar_bottom__menu_icon}>
                    <Link to="/wallet" className={active == "/wallet" ? (styles.active) : ""}>
                        <FavoriteBorderOutlinedIcon />
                        <span>Wallet</span>
                    </Link>
                </div>

                <div className={styles.navbar_bottom__menu_icon}>
                    <Link to="/how-to-earn-cashback" className={active == "/how-to-earn-cashback" ? (styles.active) : ""}>
                        <h3>₹</h3>
                        <span>Refer & Earn</span>
                    </Link>
                </div>

                <div className={styles.navbar_bottom__menu_icon}>
                    <Link to="/overview" className={active == "/account" ? (styles.active) : ""}>
                        <PersonOutlineOutlinedIcon />
                        <span>Account</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar_Bottom
