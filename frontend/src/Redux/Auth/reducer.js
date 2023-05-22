import {
  ADD_ADDRESS_SUCCESS,
  ADD_CART_FAILURE, ADD_CART_REQUEST, ADD_CART_SUCCESS, DELETE_ADDRESS_SUCCESS, DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_ADDRESSES_SUCCESS, GET_CART_SUCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, ORDER_PLACED_SUCCESS, POST_SIGNIN_FAILURE, POST_SIGNIN_REQUEST, POST_SIGNIN_SUCCESS, SET_LOGIN_REQUEST, SET_LOGOUT_REQUEST, UPDATE_CART_SUCCESS,
} from "./actionTypes";

let key = JSON.parse(localStorage.getItem("isAuth"));
const initialState = { users: [], isAuth: key || false, isLoading: false, isError: false, cart: [],addresses:[] };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_SIGNIN_REQUEST:
      return { ...state, isLoading: true };
    case POST_SIGNIN_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case POST_SIGNIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_USER_REQUEST:
      return { ...state, isLoading: true };
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, isError: false, users: payload };
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case SET_LOGIN_REQUEST:
      return { ...state, isAuth: true };
    case SET_LOGOUT_REQUEST:
      return { ...state, isAuth: false };
    case GET_CART_SUCESS:
      return { ...state, isLoading: false, cart: payload };
    case ADD_CART_REQUEST:
      return { ...state, isLoading: true };
    case ADD_CART_SUCCESS:
      return { ...state, isLoading: false, cart: [...state.cart, payload] };
    case ADD_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case DELETE_CART_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_CART_SUCCESS:
      const updatedCart = state.cart.filter(el => el._id != payload)
      return { ...state, isLoading: false, cart: updatedCart };
    case DELETE_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case UPDATE_CART_SUCCESS:
      return { ...state, isLoading: false, cart: payload };
    case GET_ADDRESSES_SUCCESS:
      return { ...state, isLoading: false, addresses: payload };  
    case ADD_ADDRESS_SUCCESS:
      return { ...state, isLoading: false, addresses:[...state.addresses,payload] }; 
    case DELETE_ADDRESS_SUCCESS:
      return { ...state, isLoading: false, addresses:state.addresses.filter(el=>el._id!=payload)};   
    case ORDER_PLACED_SUCCESS:
      return { ...state, isLoading: false, cart:[]};
    default:
      return state;
  }
};
