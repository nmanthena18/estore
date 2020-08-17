import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {emptyCart} from '../../store/actions/cart'
import {createOrder} from '../../store/actions/order'
import {updateAddress} from '../../store/actions/address'
import BookPaymentSection from '../../components/bookPaymentSection/BookPaymentSection'
import CartList from '../../components/cartList/CartList'
import AddressComponent from '../../components/address/Address'
import './Checkout.scss'
import { Book } from '../../components/book/BookInterface'
import { Order } from '../../components/order/OrderInterface'
import {Address} from '../../components/address/AddressInterface'
import { BookPaymentDetail } from '../../components/bookPaymentSection/BookPaymentInterface'


type RootState = {
    cart: Book[];
    address:Address
  } 

const Checkout: React.FC = () => {

    const dispatch = useDispatch()
    const [paymentInfo, setPaymentInfo] = useState<BookPaymentDetail>({})
    const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false)

    const cart = useSelector((state: RootState) => state?.cart);
    const address = useSelector((state: RootState) => state?.address);


    useEffect(() => {
       
       if(cart && cart.length > 0 ) {
        let bookPaymentDetail: BookPaymentDetail = {};
        bookPaymentDetail.total = cart.reduce((aggr,val) => aggr+val.price, 0)
        bookPaymentDetail.tax = parseFloat(((12/ 100) * bookPaymentDetail.total).toFixed(2))
        bookPaymentDetail.shippingCharge = parseFloat(((5/ 100) * bookPaymentDetail.total).toFixed(2))
        let temp = bookPaymentDetail?.total + bookPaymentDetail?.tax + bookPaymentDetail?.shippingCharge
        bookPaymentDetail.finalPrice = parseFloat(temp.toFixed(2))
        setPaymentInfo(bookPaymentDetail)
       }
       
    }, [cart])

    const checkoutOrder = () => {
        const  newOrder: Order = {
            orderId: Math.random().toString(36).slice(2),
            items: [...cart],
            status: process.env.REACT_APP_DELIVERED,
            date: new Date(),
            address: address
        }
        
        dispatch(createOrder(newOrder))
        dispatch(emptyCart())
        setIsCheckoutSuccess(true)
    }

    const onChangeAddressHandler = (address: Address) => {
        dispatch(updateAddress({...address}))
    }

    if (isCheckoutSuccess) {
        return <div className="container-main">
             <div className="shipping_div">
                    <h2 className="shipping_heading">{process.env.REACT_APP_CHECKOUT_SUCCESS_MESSAGE}</h2>
                 </div>
                 </div>
     }else if(cart.length === 0) {
        return <div className="container-main">
        <div className="shipping_div">
            <h2 className="shipping_heading">Cart is  empty</h2>
            </div>
            </div>
     }
     else {
        return (

            <section>
                <div className="container-main">
                    <div className="shipping_div">
                        <AddressComponent address={address} onChangeAddressHandler={onChangeAddressHandler}/>                        
                    </div>
                    <div className="shopping_div">
                        <CartList cart={cart}/>
                        <BookPaymentSection disableSubmit={Object.keys(address).length === 0} paymentInfo={paymentInfo} checkoutOrder={checkoutOrder}/>
                    </div>
                </div>
            </section>
        )
     }
}

export default Checkout