import style from "./BioDescriptionComponent.module.css";
import { HiOutlineSparkles } from "react-icons/hi2";

function BioDescription() {
  return (
    <div className={style.bioContainerGeneral}>
      <div className={style.bioIconContainer}>
        <HiOutlineSparkles size={30} color={"#BCBCBC80"} />
      </div>
      <div className={style.bioInfoContainer}>
        <div className={style.name}> Fábio Guimarães Silva</div>
        <div className={style.bio}>
          Since I was young, the quest to surpass my own abilities has been a
          goal, always with the focus on proving to myself that I am capable
          just like everyone else, with more or less sacrifice. A phrase that
          identifies me is: “I'm not afraid to work”. This is a motto for me
          because I'm always looking to grow as a person and as a professional.{" "}
        </div>
      </div>
    </div>
  );
}

export default BioDescription;
