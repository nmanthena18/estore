import {
    ADD_TO_CART, EMPTY_CART
} from "./index";
import { Order } from "../../components/order/OrderInterface";
import { Book } from "../../components/book/BookInterface";

///

export const addToCart = (payload: Book | undefined) => {
    return {
        type: ADD_TO_CART,
        payload: payload
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART
    }
}