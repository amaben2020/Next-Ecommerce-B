import { useReducer } from 'react';
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_FROM_CART } from './Types';
import CartContext from './CartContext';
import CartReducer from './CartReducer';

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
    featuredProduct: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    return dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = () => {
    return dispatch({ type: REMOVE_FROM_CART });
  };

  const toggleCart = () => {
    return dispatch({ type: SHOW_HIDE_CART });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        featuredProduct: state.featuredProduct,
        addToCart,
        removeFromCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
