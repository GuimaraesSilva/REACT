import style from './Banner.module.css';

function Banner(props:any) {
    const { BannerTitle, BannerDescription } = props;

    return (
        <div className={style.AboutContainer}>
            <span className={style['banner']}>{BannerTitle}:{BannerDescription}</span>
        </div>
    )
}


export default Banner