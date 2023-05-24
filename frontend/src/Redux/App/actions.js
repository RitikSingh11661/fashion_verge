import {GET_CAROSELS_DATA_FAILURE,GET_CAROSELS_DATA_REQUEST,GET_CAROSELS_DATA_SUCCESS,GET_PRODUCTS_FAILURE,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS
} from "./actiontypes";
import axios from "axios";

const getProductsRequest = () => ({ type: GET_PRODUCTS_REQUEST });
const getProductsSuccess = (payload) => ({ type: GET_PRODUCTS_SUCCESS, payload });
const getProductstFailure = () => ({ type: GET_PRODUCTS_FAILURE });
const getCaroselsDataRequest = () =>({ type: GET_CAROSELS_DATA_REQUEST });
const getCaroselsDataSuccess = (payload) =>({ type: GET_CAROSELS_DATA_SUCCESS, payload });
const getCaroselsDataFailure = () =>({ type: GET_CAROSELS_DATA_FAILURE });

export const getProducts = (param) => async (dispatch) => {
  dispatch(getProductsRequest());
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_AI}/products`, param);;
    dispatch(getProductsSuccess(res.data.data));
    return res.data.data;
  } catch (error) {
    console.log('error',error);
    dispatch(getProductstFailure());
    throw error;
  }
}

export const getCarosels = (dispatch) => {
  dispatch(getCaroselsDataRequest())
  axios.get(`https://paytmmallserver.onrender.com/allcarosels`).then((res) => {
    dispatch(getCaroselsDataSuccess(res.data))
    // console.log(res.data);
  }).catch((err) => {
    dispatch(getCaroselsDataFailure());
    // console.log(err);
  })
}