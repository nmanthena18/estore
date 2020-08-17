import { Book } from "../book/BookInterface";
import { Address } from "../address/AddressInterface";

export interface Order {
    orderId?: string;
    items?: Book[];
    status?: string;
    date?: Date;
    address?:Address
}

export  interface OrderBook extends Book {
    status: string,
    date:any,
    address?:Address
}