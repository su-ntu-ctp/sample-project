import { useContext } from 'react';
import styles from './CartButton.module.css';

import CartContext from '../../store/CartContext';

function CartButton({ onClick }) {
  const ctx = useContext(CartContext);
  const numItems = ctx.items.reduce((total, item) => {
    return total + item.quantity
  }, 0);

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>🛒</span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numItems}</span>
    </button>
  )
}

export default CartButton;