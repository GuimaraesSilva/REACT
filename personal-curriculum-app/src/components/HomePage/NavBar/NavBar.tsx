import logo from '../../../assets/Signature.png'
import style from './NavBar.module.css'

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
                        <li><a href="#">About</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                
            </nav>
            <div className={style.navButton}>
                <button className={style.button}>Let's Talk</button>
            </div>
        </div>
        )
}

export default NavBar;