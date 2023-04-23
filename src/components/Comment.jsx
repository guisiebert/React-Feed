import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { useState } from 'react'

export function Comment({content, onDeleteComment}) {

    const [claps, setClaps] = useState(0)

    function handleDelete() {
        onDeleteComment(content)
    }

    function handleClap() {
        setClaps(claps+1)
    }

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

                        <button title='Deletar comentário' onClick={() => setClaps(claps+1)}> 
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleClap}>
                        <ThumbsUp size={24}/>
                        Aplaudir <span>{claps}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}