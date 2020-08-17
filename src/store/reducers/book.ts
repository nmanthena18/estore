import {
  GET_BOOKS,UPDATE_BOOKS, LOAD_BOOKS
} from "../actions";


export default (state = {data:[],count:10}, action:any) => {
  switch (action.type) {
    case `${GET_BOOKS}_INIT`: {
      return { data: [], count:state.count,spinner: true };
    }

    case `${GET_BOOKS}_FULFILLED`: {
      return { data:[...state?.data, ...action.payload], count:state?.count, spinner: false };
    }

    case `${UPDATE_BOOKS}`: {
      return { data:[...action.payload], count:state?.count ,spinner: false };
    }

    case `${GET_BOOKS}_REJECTED`: {
      return { data: [], spinner: false, count:state?.count,error: action.payload };
    }

    case `${LOAD_BOOKS}`: {
      return { data: [...state?.data], spinner: false, count:state?.count+action?.payload, error: action.payload };
    }

    default:
      return state;
  }
};
