import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/guisiebert.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time  dateTime='2023-04-20 08:50:50'>Publicado há 1h</time>
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
                <textarea>Muito massa cara!</textarea>
                <button>Publicar</button>
            </form>
        </article>
    )
}