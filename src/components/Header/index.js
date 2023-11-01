import styles from './Header.module.css'
function Header() {
    return (
        <header className={styles.Header}>
            <span>Calvoflix</span>
            <nav>
                <a href='#'>Assistir</a>
                <a href='#'>Favoritos</a>
            </nav>

        </header>
    )
}

export default Header