import style from './About.module.css';
import { TfiDirection } from "react-icons/tfi";
import bioImage from '../../../assets/AVATAR.png';



function About(props:any) {
    const { bioJob, bioName, bioDescription } = props;


    return (
        <div className={style.AboutContainer}>
            <div className={style.imageContainer}>
                <img src={bioImage} className={style.bioImage}></img> 
            </div>
            <div className={style.infoContainer}>
                <div className={style.infoTextContainer}>
                    <span className={style.bioJob}>{bioJob}</span>
                    <span className={style.bioName}>{bioName}</span>
                    <span className={style.bioDescription}>{bioDescription}</span>
                </div>
                <div className={style.infoButtonContainer}>
    
                <a className={style.infoButton} href="www.google.com">
                <TfiDirection /></a>
                </div>
            </div>
        </div>
    )
}


export default About