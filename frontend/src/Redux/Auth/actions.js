import {
  ADD_ADDRESS_SUCCESS, ADD_CART_FAILURE, ADD_CART_REQUEST, ADD_CART_SUCCESS, DELETE_ADDRESS_SUCCESS, DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_ADDRESSES_SUCCESS, GET_CART_SUCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, ORDER_PLACED_SUCCESS, POST_SIGNIN_FAILURE, POST_SIGNIN_REQUEST, POST_SIGNIN_SUCCESS, SET_LOGIN_REQUEST, SET_LOGOUT_REQUEST, UPDATE_CART_SUCCESS,
} from "./actionTypes";
import axios from "axios";

// signup actions
const signupRequestAction = () => ({ type: POST_SIGNIN_REQUEST });
const signupSuccessAction = () => ({ type: POST_SIGNIN_SUCCESS });
const signupFailureAction = () => ({ type: POST_SIGNIN_FAILURE });
const userRequestAction = () => ({ type: GET_USER_REQUEST });
const userSuccessAction = (payload) => ({ type: GET_USER_SUCCESS, payload });
const userFailureAction = () => ({ type: GET_USER_FAILURE });
const setLoginAction = () => ({ type: SET_LOGIN_REQUEST });
const setLogoutAction = () => ({ type: SET_LOGOUT_REQUEST });
const addRequestAction = () => ({ type: ADD_CART_REQUEST });
const addSuccessAction = (payload) => ({ type: ADD_CART_SUCCESS, payload });
const addFailureAction = () => ({ type: ADD_CART_FAILURE });

// delete cart actions

const deleteCartRequestAction = () => ({ type: DELETE_CART_REQUEST });
const deleteCartSuccessAction = (payload) => ({ type: DELETE_CART_SUCCESS, payload })
const deleteCartFailureAction = () => ({ type: DELETE_CART_FAILURE })
const getCartSuccess = (payload) => ({ type: GET_CART_SUCESS, payload })
const updateCartSuccess = (payload) => ({ type: UPDATE_CART_SUCCESS, payload });

const getAddressesAction = (payload) => ({ type: GET_ADDRESSES_SUCCESS, payload });
const addAddressSuccessAction = (payload) => ({ type: ADD_ADDRESS_SUCCESS, payload });
const deleteAddressSuccessAction = (payload) => ({ type: DELETE_ADDRESS_SUCCESS, payload });
const orderPlacedSuccess = () => ({ type: ORDER_PLACED_SUCCESS })

// singup function

export const signup = (user) => async (dispatch) => {
  dispatch(signupRequestAction());
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_AI}/users/register`, JSON.stringify(user), {
      headers: { 'Content-Type': 'application/json' }
    })
    dispatch(signupSuccessAction())
    return res;
  } catch (error) {
    console.log('error', error)
    dispatch(signupFailureAction())
    throw error;
  }
};

export const getUsers = (dispatch) => {
  dispatch(userRequestAction());
  axios
    .get(`${process.env.REACT_APP_API_AI}/users`)
    .then((res) => {
      dispatch(userSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(userFailureAction());
    });
};

export const setLogin = (dispatch) => {
  dispatch(setLoginAction());
};

export const setLogout = (dispatch) => {
  dispatch(setLogoutAction());
  localStorage.clear();
};

export const getCartData = async (dispatch) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_AI}/cart`, { headers: { token: localStorage.getItem('token') } });
    dispatch(getCartSuccess(data.data))
  } catch (error) {
    console.log('error', error)
  }
}

export const addToCart = (details) => async (dispatch) => {
  dispatch(addRequestAction());
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_AI}/cart/add`, details, { headers: { token: localStorage.getItem('token') } })
    dispatch(addSuccessAction(details));
    return res;
  } catch (error) {
    console.log('error', error)
    dispatch(addFailureAction());
    throw error;
  }
};

export const deleteCartData = (id) => async (dispatch) => {
  dispatch(deleteCartRequestAction);
  try {
    const res = await axios.delete(`${process.env.REACT_APP_API_AI}/cart/delete/${id}`, { headers: { token: localStorage.getItem('token') } });
    console.log('res', res);
    dispatch(deleteCartSuccessAction(id));
    return res;
  } catch (error) {
    console.log('error', error)
    dispatch(deleteCartFailureAction);
    throw error;
  }
};

export const updateCartData = (product, updatedCart) => async (dispatch) => {
  try {
    const res = await axios.patch(`${process.env.REACT_APP_API_AI}/cart/update/${product._id}`, product, { headers: { token: localStorage.getItem('token') } });
    dispatch(updateCartSuccess(updatedCart));
    return res;
  } catch (error) {
    console.log('error', error);
  }
};

export const getAddressess = async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_AI}/address`, { headers: { token: localStorage.getItem('token') } })
    dispatch(getAddressesAction(res.data.data));
  } catch (error) {
    console.log('error', error);
  }
};

export const addAddress = (details) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_AI}/address/add`, details, { headers: { token: localStorage.getItem('token') } })
    dispatch(addAddressSuccessAction(details));
    return res;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export const deleteAddress = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_API_AI}/address/delete/${id}`, { headers: { token: localStorage.getItem('token') } })
    dispatch(deleteAddressSuccessAction(id));
    return res;
  } catch (error) {
    throw error;
  }
}

export const orderPlaced = (cart, addressId) => async (dispatch) => {
  try {
    const promises = cart.map(async (singleCart) => {
      await axios.delete(`${process.env.REACT_APP_API_AI}/cart/delete/${singleCart._id}`, { headers: { token: localStorage.getItem('token') } });
      const response = await axios.post(`${process.env.REACT_APP_API_AI}/order/add`, { ...singleCart, addressId }, { headers: { token: localStorage.getItem('token') } });
      dispatch(orderPlacedSuccess);
      return response;
    });
    const res = await Promise.all(promises);
    return res[0];
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getOrders = async (userId) => {
  return axios.get(`${process.env.REACT_APP_API_AI}/order`, { headers: { token: localStorage.getItem('token') } });
}