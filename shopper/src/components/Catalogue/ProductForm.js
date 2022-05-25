import { useRef, useState } from 'react';
import Input from '../UI/Input';
import styles from './ProductForm.module.css';

function ProductForm({ id, onAddCart }) {
  const [isValid, setIsValid] = useState(true);
  const quantityInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    
    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity; // convert string -> number
    
    if (enteredQuantity.trim().length === 0 
      || enteredQuantityNumber < 1
      || enteredQuantityNumber > 5
    ) { 
      setIsValid(false); 
      return; 
    }
    onAddCart(enteredQuantityNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={quantityInputRef}
        label='Quantity'
        input={{
          id: 'qtyId_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
      {!isValid && <p>Please enter a valid quantity (1-5)</p>}
    </form>
  );
}

export default ProductForm;