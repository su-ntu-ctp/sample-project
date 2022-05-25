import { createContext, useReducer } from 'react';
import { cartReducer, defaultCart } from './CartReducer';

const CartContext = createContext({
  items: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
})

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (item) => {
    // console.log('addItemHandler:', addItemHandler);
    dispatch({type: 'ADD', item: item});
  }

  const removeItemHandler = (id) => {
    dispatch({type: 'REMOVE', id: id});
  }

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }

  return <CartContext.Provider value={cartContext}>
    {children}
  </CartContext.Provider>
}

export default CartContext;
