import {
  CREATE_ADDRESS,UPDATE_ADDRESS

} from "../actions";

export default (state = {}, action) => {
  switch (action.type) {

    case `${CREATE_ADDRESS}`: {
      return { ...state,...action.payload };
    }
    case `${UPDATE_ADDRESS}`: {
      return { ...action.payload };
    }
    default:
      return state;
  }
};
