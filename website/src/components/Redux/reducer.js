import {
  SET_ITEMS,
  SET_LOADING,
} from './types';

const initialState = {
  items: [],
  loading:false,
};
export default (state = initialState, {type, payload}) => {
  console.log("type",type,"payload",payload);
  switch (type) {
    case SET_ITEMS:
      return {
        ...state,
        items   : payload,
      };  
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
    };  
    default:
      return {...state};
  }
};