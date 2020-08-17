import {
    GET_BOOKS,UPDATE_BOOKS,
    LOAD_BOOKS
} from "./index";
import { Book } from "../../components/book/BookInterface";

///

export const getfetchBooksInit = () => {
    return {
        type: GET_BOOKS+'_INIT'
    }
}

export const getBooksFulfilled = (payload: Book[]) => {
    return {
        type: GET_BOOKS+'_FULFILLED',
        payload: payload
    }
}

export const getBooksFailed = (payload:any) => {
    return {
        type: GET_BOOKS+'_FULFILLED',
        payload: payload
    }
}

export const updateBooks = (payload: any[] | undefined) => {
    return {
        type: UPDATE_BOOKS,
        payload: payload
    }
}

export const loadBooks = (payload: number) => {
    return {
        type: LOAD_BOOKS,
        payload: payload
    }
}