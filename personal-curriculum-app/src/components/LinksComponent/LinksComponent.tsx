import style from "./LinksComponent.module.css";
import { BsSuitDiamondFill } from "react-icons/bs";

function Links() {
  return (
    <div className={style.linksGeneralContainer}>
      <div className={style.linksWrapper}>
        <ul>
          <li className={style.vaiCaralho}>
            {" "}
            <a href="#">
              <span className={style.linkText}>Linkedin</span>
            </a>
          </li>
          <BsSuitDiamondFill />
          <li>
            <a href="#">
              <span className={style.linkText}>Behance</span>
            </a>
          </li>
          <BsSuitDiamondFill />
          <li>
            <a href="#">
              <span className={style.linkText}>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Links;
