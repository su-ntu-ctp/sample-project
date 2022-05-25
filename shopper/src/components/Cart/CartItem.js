import styles from './CartItem.module.css';

const CartItem = ({ price, name, quantity, onRemove, onAdd }) => {
  return (
    <li className={styles.cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{`$${price.toFixed(2)}`}</span>
          <span className={styles.quantity}>x {quantity}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
