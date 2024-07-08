import PostsCard from '../PostsGrid/PostsCard/PostsCard'
import styles from './PostsGrid.module.css'

const posts = [
    {
        "postImage": "src/assets/posts/unsplash_dEGu-oCuB1Y.png",
        "categories": [
            "Google",
            "Trending",
            "New"
        ],
        "title": "Loudest à la Madison #1 (L'integral)",
        "summary": "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        "postDate": "22 July 2024",
        "comments": 10,
        "link": "/blog/link1"
    },
    {
        "postImage": "src/assets/posts/unsplash_hHdHCfAifHU.png",
        "categories": [
            "Tech",
            "Innovation",
            "Hot"
        ],
        "title": "Exploring the Future of AI",
        "summary": "Join us as we delve into the advancements and implications of artificial intelligence in our daily lives.",
        "postDate": "15 June 2024",
        "comments": 8,
        "link": "/blog/link2"
    },
    {
        "postImage": "src/assets/posts/unsplash_tVEqStC2uz8.png",
        "categories": [
            "Health",
            "Wellness",
            "Tips"
        ],
        "title": "Top 10 Health Tips for 2024",
        "summary": "Discover the best practices to maintain a healthy lifestyle in the modern age.",
        "postDate": "30 May 2024",
        "comments": 5,
        "link": "/blog/link3"
    }
]

function PostsGrid() {
    return (
        <div className={styles.postGrid}>
            {
                posts.map((post) => {
                    return (
                        <PostsCard
                        postImage={post.postImage}
                        categories={post.categories}
                        title={post.title}
                        summary={post.summary}
                        postDate={post.postDate}
                        comments={post.comments}
                        link={post.link}
                        />
                    )
                })
            }

        </div>
    )
}

export default PostsGrid