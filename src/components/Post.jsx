import styles from './Post.module.css'
import { Comment } from './Comment.jsx'

// author: {name: "", avatarUrl: "", role: ""} 
// publishedAt: Date
// content: String


export function Post({author, publishedAt}) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time  dateTime='2023-04-20 08:50:50'>{publishedAt.toString()}</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href=''> jane.design/doctorcare</a></p>
                <p>
                    <a>#novoprojeto</a> {' '}
                    <a>#nlw</a> {' '}
                    <a>#rocketseat</a> {' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                    placeholder='Deixe um comentário...'
                />
                
                <button type='submit'>Publicar</button>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />

            </div>
        </article>
    )
}