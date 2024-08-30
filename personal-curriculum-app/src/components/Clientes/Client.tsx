import style from './Client.module.css';
import Data from './Data/Data'



function Client() {
    

    return (
        <div className={style.dataContainerGeneral}>
            <Data
            value="7"
            description="years experience"/>
            <Data
            value="+30"
            description="clients worldwide"/>
             <Data
            value="+50"
            description="multimedia projects"/>
           
        </div>
       

    )
}

export default Client