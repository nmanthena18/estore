import React, {useState} from 'react'
import './Order.scss'
import { OrderBook } from './OrderInterface'

type Props = {
    order: OrderBook
}

type MenuHandler = {
    isBookDetailsActive: boolean; 
    isShippingDetailsActive: boolean
}

const OrderComponent: React.FC<Props> = ({ order }) => {

    const [menuHandler, setmenuHandler] = useState<MenuHandler>({isBookDetailsActive: true, isShippingDetailsActive: false})

    const onClickMenuHandler = (e:any) => {        
        setmenuHandler(e?.target?.id === "bookDetailsActive" ? {isBookDetailsActive: true, isShippingDetailsActive: false}:{isBookDetailsActive: false, isShippingDetailsActive: true})
    }

    return (
        <div className="order_box">
            <div>
                <table className="status_table">
                    <tbody>
                        <tr>
                            <td>Order placed:<span className="table_span">{order?.date.toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                            }).split(' ').join('-')}</span></td>
                            <td className="text-right">Status:<span className="table_span">{order?.status}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table className="status_inside_table">
                    <tbody>
                        <tr>
                            <td className="status_img"><img className="list_img" src={order?.thumbnailUrl} /></td>
                            <td>
                                <div className="tab">
                                    <button id="bookDetailsActive" className={`tablinks ${menuHandler?.isBookDetailsActive ? 'active':''}`}  onClick={onClickMenuHandler}>Book details</button>
                                    <button id="shippingDetailsActive" className={`tablinks ${menuHandler?.isShippingDetailsActive ? 'active':''}`} onClick={onClickMenuHandler}>Shipping Details</button>
                                </div>
                                {function(menuHandler){
                                        if(menuHandler.isBookDetailsActive) 
                                            return <div>
                                            <h2 className="product_heading">{order?.title}</h2>
                                            <h5 className="product_price">{order?.price}$</h5>
                                            <p className="p_desc">Author:<span className="spn_desc">{order?.author}</span></p>
                                            
                                        </div>

                                        if(menuHandler.isShippingDetailsActive)
                                            return <div>                                
                                            <p className="p_desc">Name:<span className="spn_desc">{order?.address?.name}</span></p>
                                <p className="p_desc">Email:<span className="spn_desc">{order?.address?.email}</span></p>
                                <p className="p_desc">Address:<span className="spn_desc">{order?.address?.shippingAddress}</span></p>
                                        </div>
                                    }(menuHandler)}                                                           
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderComponent
