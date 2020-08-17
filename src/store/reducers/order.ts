import {
  CREATE_ORDER

} from "../actions";

export default (state = [], action:any) => {
  switch (action.type) {

    case `${CREATE_ORDER}`: {
      return [ ...state, action.payload ];
    }
    default:
      return state;
  }
};
