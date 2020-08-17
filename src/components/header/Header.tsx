import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.css'
import { Book } from '../book/BookInterface'
import {HOME,ORDERS,CHECKOUT} from '../../routes/contant'


type RootState = {
  cart: Book[]
}

const Header: React.FC = () => {


    const cart = useSelector((state: RootState) => state?.cart);

    const resRF = () => {
        var x: any = document.getElementById("myTopnav");
        if (x?.className === "mainnav") {
          x.className += " responsive";
        } else {
          x.className = "mainnav";
        }
      }

    return <div className="mainnav" id="myTopnav">
        <a href="javascript:void(0)" className="icon_heading">E Store</a>
        <div className="menu-right">
            <Link to={HOME}>Home</Link>
            <Link to={ORDERS}>My Orders</Link>
            <Link to={CHECKOUT}>Cart ({cart.length})</Link>
            <a href="javascript:void(0);" className="baricon" onClick={resRF}>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
        </a>
        </div>
    </div>
}

export default Header
