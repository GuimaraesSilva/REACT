import logo from '../../assets/svg/logo.svg'
import style from './Navbar.module.css'
import { Icon } from '@iconify/react';


function NavBar() {
    return (
        <div className={style['main-header']}>
            <div className={`${style.logoWrapper}`}>
                <img src={logo} alt="logo" />
            </div>

            <nav className={style.linksWrapper}>
                <div className={style.mainMenu}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Pages</a></li>
                    </ul>
                </div>
                <div className={style.utilityMenu}>
                    <ul>
                        <li className={style.loginLinks}><a className={style.linksWithIcons} href="#login">
                            <Icon icon="mdi:user-outline" height={24} /> Login</a>
                        </li>
                        <li><a href="#register">Register</a></li>
                        <li><a className={style.linksWithIcons} href="#search">
                            <Icon icon="ion:search-outline" height={20}/></a>
                        </li>
                        <li><a className={style.linksWithIcons} href="#cart">
                            <Icon icon="marketeq:cart-add" height={24}/></a>
                        </li>
                        <li><a className={style.linksWithIcons} href="#fav">
                            <Icon icon="ph:heart-light" height={20}/></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;