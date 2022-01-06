import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, getCartItems, removeCartItem } from "../../actions/addtocart";
import Layout from "../../component/Layout";

import CartItem from "./cartItem";


const Cart = (props) => {

    /*
    Before Login
    Add product to cart
    save in localStorage
    when try to checkout ask for credentials and 
    if logged in then add products to users cart database from localStorage
    */

    const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch()


    const [cartItems, setCartItems] = useState(cart.cartItem);



    useEffect(() => {
        setCartItems(cart.cartItem);
    }, [cart.cartItem]);

    useEffect(() => {
        dispatch(getCartItems());
    }, [auth.token]);


    const onQuantityIncrement = (_id, qty) => {

        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, 1));
    };

    const onQuantityDecrement = (_id, qty) => {
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, -1));
    };

    const onRemoveCartItem = (_id) => {
        dispatch(removeCartItem({ productId: _id }));
    };

    // if (props.onlyCartItems) {
    //     return (
    //         <>
    //             {Object.keys(cartItems).map((key, index) => (
    //                 <CartItem
    //                     key={index}
    //                     cartItem={cartItems[key]}
    //                     onQuantityInc={onQuantityIncrement}
    //                     onQuantityDec={onQuantityDecrement}
    //                 />
    //             ))}
    //         </>
    //     );
    // }

    return (
        <Layout>
            <div className="cartContainer" style={{
                alignItems: "flex-start", display: "flex", maxWidth: "1260px", margin: "15px auto",
                justifyContent: " space-between"
            }}>
                {/* <Card
          headerLeft={`My Cart`}
          headerRight={<div>Deliver to</div>}
          style={{ width: "calc(100% - 400px)", overflow: "hidden" }}
        > */}
                <div>Deliver to
                </div>
                {Object.keys(cartItems).map((key, index) => (
                    <CartItem
                        key={index}
                        cartItem={cartItems[key]}
                        onQuantityInc={onQuantityIncrement}
                        onQuantityDec={onQuantityDecrement}
                        onRemoveCartItem={onRemoveCartItem}
                    />
                ))}

                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        background: "#ffffff",
                        justifyContent: "flex-end",
                        boxShadow: "0 0 10px 10px #eee",
                        padding: "10px 0",
                        boxSizing: "border-box",
                    }}
                >
                    <div style={{ width: "250px" }} onClick={() => props.history.push(`/checkout`)}>
                        {/* <MaterialButton
                            title="PLACE ORDER"
                           
                        /> */}
                        place ORDER
                    </div>
                </div>
                {/*             
            <PriceDetails
                totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
                    return qty + cart.cartItems[key].qty;
                }, 0)}
                totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
                    const { price, qty } = cart.cartItems[key];
                    return totalPrice + price * qty;
                }, 0)}
            /> */}


            </div>
        </Layout >



    )
}

export default Cart
