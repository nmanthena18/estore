import {
  ADD_TO_CART, EMPTY_CART
} from "../actions";

export default (state = [], action:any) => {
  switch (action.type) {

    case `${ADD_TO_CART}`: {
      return [ ...state, action.payload ];
    }

    case `${EMPTY_CART}`: {
      return [];
    }

    default:
      return state;
  }
};
