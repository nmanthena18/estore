import {
    CREATE_ORDER
} from "./index";

///

export const createOrder = (payload) => {
    return {
        type: CREATE_ORDER,
        payload: payload
    }
}