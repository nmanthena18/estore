import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../pages/bookList/BookList"
import BookDetail from "../pages/bookDetail/BookDetail"
import Checkout from "../pages/checkout/Checkout"
import Order from "../pages/orders/OrderList"
import {HOME,CHECKOUT,ORDERS,BOOKDETAIL} from './contant'

function route():JSX.Element {
  return (
    <Switch>
      <Route exact path={HOME}>
        <Home />
      </Route>
      <Route exact path={BOOKDETAIL+"/:isbn"}>
        <BookDetail />
      </Route>
      <Route exact path={CHECKOUT}>
        <Checkout />
      </Route>
      <Route exact path={ORDERS}>
        <Order />
      </Route>
    </Switch>
  )
}

export default route
