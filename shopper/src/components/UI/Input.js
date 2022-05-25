import { forwardRef } from 'react';
import styles from './Input.module.css'

const Input = forwardRef(({input, label}, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input}/>
    </div>
  )
})

export default Input;