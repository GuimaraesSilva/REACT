import style from "./ServicesComponent.module.css";
import { CiCircleChevRight } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { PiPencilCircleLight } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoCodeOutline } from "react-icons/io5";

function ServicesComponent(props: any) {
  const { title, subtitle } = props;

  return (
    <div className={style.servicesContainerGeneral}>
      <div className={style.iconsContainer}>
        <CiCamera size={40} color={"white"} />
        <PiPencilCircleLight size={40} color={"white"} />
        <HiOutlineComputerDesktop size={40} color={"white"} />
        <IoCodeOutline size={40} color={"white"} />
      </div>
      <div className={style.infoContainer}>
        <div className={style.infoTextContainer}>
          <span className={style.subtitle}>{subtitle}</span>
          <span className={style.title}>{title}</span>
        </div>
        <div className={style.infoButtonContainer}>
          <a className={style.infoButton} href="">
            <CiCircleChevRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent;
