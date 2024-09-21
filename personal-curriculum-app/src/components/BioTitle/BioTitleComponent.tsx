import style from "./BioTitleComponent.module.css";
import { BsSuitDiamondFill } from "react-icons/bs";

function BioTitle(props: any) {
  const { titleText } = props;

  return (
    <div className={style.titleContainer}>
      <BsSuitDiamondFill size={30} color={"#BCBCBC80"} />
      <div className={style.title}>{titleText}</div>
      <BsSuitDiamondFill size={30} color={"#BCBCBC80"} />
    </div>
  );
}

export default BioTitle;
