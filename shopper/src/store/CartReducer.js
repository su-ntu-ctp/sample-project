
export const defaultCart = {
  items: [],
  total: 0,
}

export const cartReducer = (state, action) => {
  /*
    Adds new item into items array in the current state.
  */
  if (action.type === 'ADD') {
    const updateTotal = state.total + action.item.price * action.item.quantity;
    const index = state.items.findIndex((item) => item.id === action.item.id);
    let newItemList;
    if (index >= 0) {
      /*
        If index is valid, create newItem and add quantity added.
        newItemList is copied from current state.items array and
        replaced with newItem at index position.
      */
      const newItem = state.items[index];
      newItem.quantity += action.item.quantity;
      newItemList = [...state.items];
      newItemList[index] = newItem;
    } else {
      /*
        If index is not valid (-1), then simply add new item at 
        the end of the items array
      */
      newItemList = state.items.concat(action.item);
    }
    return {
      items: newItemList,
      total: updateTotal,
    }
  }
  /*
    Removes existing item from items array in the current state. 
  */

  if (action.type === 'REMOVE') {
    const index = state.items.findIndex((item) => item.id === action.id);
    const updateItem = state.items[index];
    let updateItemList;
    /*
      If only 1 item is left in the array, remove item from completely.
      ...else decrease the current item quantity by 1.
    */
    if (updateItem.quantity === 1) {
      updateItemList = state.items.filter((item) => item.id !== action.id);
    } else {
      updateItem.quantity--;
      updateItemList = [...state.items];
      updateItemList[index] = updateItem;
    }
    /*
      Don't forget to update the total price after item removal!
    */
    const updateTotal = state.total - updateItem.price;
    
    return {
      items: updateItemList,
      total: updateTotal,
    }
  }
  return defaultCart;
}
