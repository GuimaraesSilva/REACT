import styles from '../PostsCard/PostsCard.module.css'
import { Icon } from '@iconify/react/dist/iconify.js'

type PostGridType = {
    postImage: string;
    categories: string[];
    title: string;
    summary: string;
    postDate: string;
    comments: number;
    link: string;
}


function PostsCard(props: PostGridType) {

    const { postImage,
        categories,
        title,
        summary,
        postDate,
        comments,
        link,
    } = props

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <span>New</span>
                <img src={postImage} />
            </div>
            <div className={styles.info}>
                <div className={styles.categorie}>
                    {categories.map((categorie) => {
                        return(
                            <span>{categorie}</span>

                        )
                    })}       
                </div>
                <h3 className={title}>Loudest à la Madison #1
                    (L'integral)</h3>
                <p className={summary}>
                    We focus on ergonomics and meeting
                    you where you work. It's only a
                    keystroke away.
                </p>
                <div className={styles.postMeta}>
                    <div className={styles.metadata}>
                        <Icon icon="mdi:clock-outline" height="2rem" />
                        <span>{postDate}</span>
                    </div>
                    <div className={styles.metadata}>
                        <Icon icon="ooui:chart" height="2rem" />
                        <span>{comments} comments</span>
                    </div>
                </div>
                <a href= {link}>
                    Learn More
                    <Icon icon="material-symbols-light:chevron-forward" height="2.5rem" />
                </a>
            </div>

        </div>
    )
}

export default PostsCard