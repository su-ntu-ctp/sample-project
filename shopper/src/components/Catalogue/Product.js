import { useContext } from 'react';
import styles from './Product.module.css'
import CartContext from '../../store/CartContext';
import ProductForm from './ProductForm'

function Product({ id, name, description, price }) {
  const ctx = useContext(CartContext);
  const addCartHandler = (quantity) => {
    ctx.addItem({
      id: id,
      name: name,
      quantity: quantity,
      price: price
    });
  }
  return (
    <li className={styles.product}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <ProductForm id={id} onAddCart={addCartHandler} />
      </div>
    </li>
  )
}

export default Product