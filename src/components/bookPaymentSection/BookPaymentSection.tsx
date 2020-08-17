import React from 'react'
import {useHistory} from 'react-router-dom'
import './BookPaymentSection.scss'
import { BookPaymentDetail } from './BookPaymentInterface'
import {HOME} from '../../routes/contant'

type Props = {
    paymentInfo: BookPaymentDetail;
    disableSubmit:boolean;
    checkoutOrder : () => void
}

const BookPaymentSection: React.FC<Props> = ({paymentInfo, disableSubmit,checkoutOrder}) => {

    const history: any = useHistory()

    return (
        <div className="">
            <h2 className="shipping_heading">Payment Info</h2>
            <div className="cart_div">
            <table className="cart_table">
                <tbody>
                    <tr>
                        <td>Items Price</td>
                        <td className="text-right">${paymentInfo.total}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td className="text-right">${paymentInfo?.tax}</td>
                    </tr>
                    <tr>
                        <td>Shipping Charge</td>
                        <td className="text-right">${paymentInfo?.shippingCharge}</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td className="text-right"><strong>${paymentInfo?.finalPrice}</strong></td>
                    </tr>
                </tbody>
            </table>
            <div className="text-right"><button type="button" className="product_btns btn1" onClick={(e) => history.push(HOME)}>Cancel</button>
            <button type="button" disabled={disableSubmit} className="product_btns btn2" onClick={checkoutOrder}>Checkout</button></div>
            </div>
            
        </div>
    )
}

export default BookPaymentSection
