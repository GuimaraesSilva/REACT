import style from './social.module.css'
import { FaBehance } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


function social() {

    return(

            <div className={style.container}>
                <div className={style.circle1}>
                <FaBehance size={40} color={'white'} />
                </div>
                <div className={style.circle2}>
                <FaLinkedinIn size={40} color={'white'} />

                </div>
            </div>
    )
}

export default social