import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rupert Sanches</strong>
                            <time dateTime='2023-05-11 04:14:24'>Há 3 horas</time>
                        </div>

                        <button title='Deletar comentário'> 
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={24}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}