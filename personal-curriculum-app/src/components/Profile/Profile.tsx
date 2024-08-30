import style from './Profile.module.css';
import { CiCircleChevRight } from "react-icons/ci";
import Social from './Social/Social';



function Profile(props:any) {
    const { subtitle, title } = props;

    return (
        <div className={style.socialContainerGeneral}>
            <Social />
            <div className={style.infoContainer}>
                <div className={style.infoTextContainer}>
                    <span className={style.subtitle}>{subtitle}</span>
                    <span className={style.title}>{title}</span>
                </div>
                <div className={style.infoButtonContainer}>
                <a className={style.infoButton} href="">
                <CiCircleChevRight /></a>
                </div>
            </div>
        </div>

    )
}

export default Profile