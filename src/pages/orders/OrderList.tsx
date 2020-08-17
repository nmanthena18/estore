import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import  OrderComponent from '../../components/order/Order'
import './OrderList.scss'
import { Book } from '../../components/book/BookInterface'
import {Order, OrderBook} from '../../components/order/OrderInterface'

  type RootState  = {
    orders: Order[]
  }

const OrderList: React.FC = () => {

    const orders = useSelector((state: RootState) => state?.orders);
    const [orderedBooks, setOrderedBooks] = useState<OrderBook[]>([])

    useEffect(() => {

        if (orders && orders.length > 0) {
            const data = orders.reduce((aggr: OrderBook[], val: Order) => {

                if(val?.items && val?.items.length > 0) {
                    const modArr: OrderBook[] = val?.items?.map((obj: any) => {
                        obj.address = val?.address
                        obj.status = val?.status
                        obj.date = val?.date
                        return obj
                    })
                    aggr = [...aggr, ...modArr]
                    return aggr
                }else {
                    aggr = [...aggr]
                    return aggr
                }

            }, [])            
            setOrderedBooks(data)
        }

    }, [orders])

    if(orders && orders.length === 0) {
        return <section>
        <div className="container-main">
            <h2>No orders placed yet !!</h2>
            </div>
            </section>
    }

    return (
        <section>
            <div className="container-main">
                {orderedBooks && orderedBooks.map(order => <OrderComponent order={order} />)}
            </div>
        </section>
    )
}

export default OrderList
