import style from "./FooterComponent.module.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.logoContainer}>
        <img src={logo} alt="logo" />
      </div>

      <nav className={style.linksWrapper}>
        <div className={style.mainMenu}>
          <ul>
            <li>
              <a href="#">
                {" "}
                <span className={style.menuFooter}> Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={style.menuFooter}> About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={style.menuFooter}> Works</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={style.menuFooter}> Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={style.copywright}>© All rights reserved by Author</div>
    </div>
  );
}

export default Footer;
