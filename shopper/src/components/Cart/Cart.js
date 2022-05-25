import { useContext } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

function Cart({ onClose }) {
  const ctx = useContext(CartContext);
  const total = `$${ctx.total.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;

  const addItemHandler = (item) => {
    ctx.addItem({...item, quantity: 1})
  }
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  }

  const cartItems = (
    <ul className={styles.cartItems}>
      {
        ctx.items.map((item) => (
          <CartItem 
            key={item.id} 
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onAdd={addItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
          />
        ))
      }
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Quantity</span>
        <span>{total}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;

