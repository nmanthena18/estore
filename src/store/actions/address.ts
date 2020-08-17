import {
    CREATE_ADDRESS,UPDATE_ADDRESS
} from "./index";
import { Address } from "../../components/address/AddressInterface";

///

export const createAddress = (payload: Address) => {
    return {
        type: CREATE_ADDRESS,
        payload: payload
    }
}

export const updateAddress = (payload: Address) => {
    return {
        type: UPDATE_ADDRESS,
        payload: payload
    }
}