import styles from './Banner.module.css'
import image from './images/banner-assistir.png'

function Banner(imagem) {
    return (
        <div className={styles.banner}>
            <img src={image} alt='banner image'></img>
        </div>
    )
}

export default Banner