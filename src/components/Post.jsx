import styles from './Post.module.css'
import { Comment } from './Comment.jsx'
import { useState } from 'react'

// author: {name: "", avatarUrl: "", role: ""} 
// publishedAt: Date
// content: String


export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        "Oloco, parabéns"
    ])

    const [newCommentText, setNewCommentText] = useState('')

    // Handle Submit
    function handleSubmit(event) {
        event.preventDefault() // pra evitar um reload da página
        setComments([...comments, newCommentText  ]) // adiciona o comentário novo no fim da array de comments
        setNewCommentText("")
    }

    // Handle Change
    function handleChange() {
        setNewCommentText(event.target.value)
    }

    // Handle Delete
    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter( comment => {
            return comment != commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

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
                {content.map( line => line.type==="paragraph" ? <p key={line.content}>{line.content}</p> : <a key={line.content}>{line.content}</a>)}
            </div>

            <form className={styles.commentForm} onSubmit={handleSubmit}>
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                    name="comment"
                    placeholder='Deixe um comentário...'
                    value={newCommentText}
                    onChange={handleChange}
                />
                
                {newCommentText && <button type='submit'>Publicar</button>}
            </form>


            <div className={styles.commentList}>
                {comments.map(comment => {return (
                    <Comment 
                        content={comment}
                        key={comment}
                        onDeleteComment={deleteComment}
                    />
                )})}

            </div>
        </article>
    )
}