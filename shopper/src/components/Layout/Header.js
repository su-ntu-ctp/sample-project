import styles from './Header.module.css'
import CartButton from './CartButton';
import bannerImage from '../../assets/shopping-cart.png';

function Header({ onShowCart }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Super Shopper</h1>
        <CartButton onClick={onShowCart} />
      </header>
      <div className={styles.mainImage}>
        <img src={bannerImage} alt='Shopper' />
      </div>
    </>
  )
}



export default Header