import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
            />

            <div className={styles.profile}>
                <img 
                    src='https://github.com/guisiebert.png'
                    className={styles.avatar}
                />
                <strong>Leslie Alexander</strong>
                <span>UI Designer</span>
            </div>

            <footer>
                <a className={styles.btn} href="#">
                    
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}