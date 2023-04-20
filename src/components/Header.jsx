import styles from './Header.module.css'
import logo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            {/* <strong>Ignite Feedo</strong> */}
            <img src={logo} />
        </header>
    )
}