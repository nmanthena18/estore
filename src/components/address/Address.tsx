import React, { useState, useEffect } from 'react'
import { Address } from './AddressInterface'
import './Address.scss'

type Props = {
    address: Address,
    onChangeAddressHandler: (e: any) => void
}

const AddressComponent: React.FC<Props> = ({ address, onChangeAddressHandler }) => {

    const [isAddressReadOnly, setisAddressReadOnly] = useState<boolean>(false)
    const [data, setdata] = useState<Address>()

    // useEffect(() => {
    //    setisAddressReadOnly(true)
    // }, [])

    useEffect(() => {
        if (Object.keys(address).length !== 0) {
            setisAddressReadOnly(true)
            setdata(address)
        }
    }, [address])

    const onClickEditHandler = () => {
        setisAddressReadOnly(false)
    }

    const onClickSaveHandler = () => {
        if (data && data.hasOwnProperty("name") && data.hasOwnProperty("email") && data.hasOwnProperty("phoneNumber") && data.hasOwnProperty("shippingAddress")) {
            onChangeAddressHandler(data)
        }
    }

    const onChangeTextHandler = (e: React.FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        let d: any = { ...data, [target.id]: target.value }
        setdata(d)
    }

    return (
        <>
            <h2 className="shipping_heading">Shipping Address</h2>
            <div className="form-box">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    return  false
                }}>
                    <div className="form-group">
                        <label className="custom-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={data?.name} onChange={onChangeTextHandler} readOnly={isAddressReadOnly} required />
                    </div>
                    <div className="form-group">
                        <label className="custom-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={data?.email} onChange={onChangeTextHandler} readOnly={isAddressReadOnly} required />
                    </div>
                    <div className="form-group">
                        <label className="custom-label">Phone number</label>
                        <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={data?.phoneNumber} onChange={onChangeTextHandler} readOnly={isAddressReadOnly} required />
                    </div>
                    <div className="form-group">
                        <label className="custom-label">Address</label>
                        <textarea className="form-control form-text-area" name="shippingAddress" id="shippingAddress" onChange={onChangeTextHandler} readOnly={isAddressReadOnly} value={data?.shippingAddress} required></textarea>
                    </div>
                    <div>
                        <button id="save" type="submit" className="product_btns btn2" onClick={(e) => onClickSaveHandler()}>Save Address</button>
                        <button id="edit" type="button" className="product_btns btn1" onClick={onClickEditHandler}>Edit Address</button></div>
                </form>
            </div>
        </>
    )
}

export default AddressComponent
