import React, { useEffect } from 'react'
import Homepage from './containers/Homepage'
import { useDispatch } from 'react-redux'
import Productdatail from './containers/productdetail'
import { getallcategory, getallproduct } from './actions/index.js'
import productlist from './containers/productlist'
import Cart from './containers/cart'
import { isusersignin } from './actions/userauth'
import Checkout from './containers/checkout'
import {
    Switch,
    Route
} from "react-router-dom";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getallcategory())
        dispatch(isusersignin())
  ;
    }, [])

    return (
        <>

            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/checkout" component={Checkout}></Route>

                <Route path="/:slug/:productid/productdetail" component={Productdatail}></Route>
                <Route path="/:slug/:cid" component={productlist}></Route>
                <Route path="/:slug" component={productlist}></Route>
            </Switch>

        </>
    )
}

export default App
