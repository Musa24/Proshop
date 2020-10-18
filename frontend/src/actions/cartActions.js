import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

//getState help to get the state tree from the store
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  const { _id, name, image, countInStock, price } = data;
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: _id,
      name,
      image,
      price,
      countInStock,
      qty,
    },
  });

  //Save to the localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
