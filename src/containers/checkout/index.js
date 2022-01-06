import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, TextField, Checkbox, Box, Toolbar, MenuList, Typography, Paper, ListItemText, Divider, Button, Input, makeStyles, Grid, EditIcon, MenuItem } from '@material-ui/core'
import { getaddress } from "../../actions/address";
import { signin } from "../../actions/userauth.js"
import { getCartItems } from "../../actions/addtocart";
import "./style.css";
import CartItem from "../cart/cartItem";
import { addToCart, removeCartItem, } from "../../actions/addtocart";
import { addOrder } from "../../actions/order";
import { AddNewaddderss } from "./addaddress";



const CheckoutStep = (props) => {
    return (
        <div className="checkoutStep">
            <div
                onClick={props.onClick}
                className={`checkoutHeader ${props.active && "active"}`}
            >
                <div>
                    <span className="stepNumber">{props.stepNumber}</span>
                    <span className="stepTitle">{props.title}</span>
                </div>
            </div>
            {props.body && props.body}
        </div>
    );
};

const Addaddderss = (props) => {

    return (
        <>


            <AddNewaddderss initialData={props.addnewadd} cancle={props.cancel(false)}/>
            {/* <div style={{ margin: "20px" }}
                // onClick={() => props.cancel(false)}
            > cancel </div> */}



        </>
    )
}




const Checkout = (props) => {
    const [editAddress, seteditAddress] = useState(false);
    const [newAddress, setNewAddress] = useState(false);
    const [myindex, setIndex] = useState({});
    const [conaddress, setconAddress] = useState([]);
    const [confirmAddress, setConfirmAddress] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [orderSummary, setOrderSummary] = useState(false);
    const [orderConfirmation, setOrderConfirmation] = useState(true);
    const [paymentOption, setPaymentOption] = useState(false);
    const [confirmOrder, setConfirmOrder] = useState(false);
    const { token, user } = useSelector(state => state.auth)
    const cart = useSelector(state => state.cart)
    const { address } = useSelector(state => state.address)

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const dispatch = useDispatch()




    const handelAddress = (e) => {
        setconAddress(e);
        setConfirmAddress(true);
        setOrderSummary(true);
        setSelectedAddress(e)
    };
    const handelEdit = (e, index) => {
        seteditAddress(true)
        setIndex(index)


    }
    const onConfirmOrder = () => {
        const totalAmount = Object.keys(cart.cartItem).reduce(
            (totalPrice, key) => {
                const { price, qty } = cart.cartItem[key];
                return totalPrice + price * qty;
            },
            0
        );
        const items = Object.keys(cart.cartItem).map((key) => ({
            productId: key,
            payablePrice: cart.cartItem[key].price,
            purchasedQty: cart.cartItem[key].qty,
        }));
        const payload = {
            addressId: selectedAddress._id,
            totalAmount,
            items,
            paymentStatus: "pending",
            paymentType: "cod",
        };

        dispatch(addOrder(payload));
        setConfirmOrder(true);
    };



    const userOrderConfirmation = () => {
        setOrderConfirmation(true);
        setOrderSummary(false);
        setPaymentOption(true);
    };

    const onQuantityIncrement = (_id, qty) => {

        const { name, price, img } = cart.cartItem[_id];
        dispatch(addToCart({ _id, name, price, img }, 1));
    };

    const onQuantityDecrement = (_id, qty) => {
        const { name, price, img } = cart.cartItem[_id];
        dispatch(addToCart({ _id, name, price, img }, -1));
    };

    const onRemoveCartItem = (_id) => {
        dispatch(removeCartItem({ productId: _id }));
    };

    useEffect(() => {
        dispatch(getaddress())
        dispatch(getCartItems())
    }, [token])

    // useEffect(() => {
    //     if (confirmOrder && user.placedOrderId) {
    //         props.history.push(`/order_details/${user.placedOrderId}`);
    //     }
    // }, [user.placedOrderId]);

    const handelLogin = () => {
        dispatch(signin({ email, pass }))
    }

    return (
        <>

            <div className="cartContainer" style={{ alignItems: "flex-start" }}>
                <div className="checkoutContainer"></div>
                <CheckoutStep
                    stepNumber={"1"}
                    title={"LOGIN"}
                    active={!token}
                    body={
                        <>
                            {token ? (
                                <div className="loggedInId">
                                    <span style={{ fontWeight: 500 }}>{user.fullName}</span>
                                    <span style={{ margin: "0 5px" }}>{user.email}</span>
                                    <Button onClick={() => props.history.push(`/`)}>Change</Button>

                                </div>
                            ) : (
                                <div>
                                    <TextField
                                        label="Email"

                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <TextField
                                        label="Password"

                                        onChange={(e) => setPass(e.target.value)}
                                    />

                                    <Button onClick={handelLogin}>Login</Button>
                                </div>
                            )}
                        </>
                    }
                />

                <CheckoutStep
                    stepNumber={"2"}
                    title={"DELIVERY ADDRESS"}
                    active={!confirmAddress && token}

                    body={
                        <>
                            {confirmAddress ? (
                                <div>
                                    {`${conaddress.name} ${conaddress.address} - ${conaddress.pinCode}`}
                                    <div onClick={() => setConfirmAddress(false)}>change</div>
                                </div>
                            ) :
                                address ? (
                                    <>
                                        {
                                            address.length > 0 ?
                                                <>
                                                    {address.map((e, index) => (
                                                        <>
                                                            <div className="stepCompleted" >
                                                                {`${e.name} ${e.address} - ${e.pinCode}`}

                                                                <div style={{ margin: '15px 15px' }} onClick={() => handelAddress(e)}>DELIVER HERE</div>

                                                                <div style={{ margin: '15px 15px', background: "red" }} onClick={() => handelEdit(e, index)}>
                                                                    EDIT

                                                                </div>

                                                            </div>

                                                            {index == myindex && editAddress == true ?
                                                                < Addaddderss
                                                                    active={editAddress}
                                                                    addnewadd={e}
                                                                    cancel={seteditAddress}
                                                                /> : null}
                                                        </>
                                                    ))}
                                                    <div style={{ margin: '15px 15px', }} onClick={() => setNewAddress(true)}>
                                                        ADD NEW ADDRESS
                                                    </div>

                                                    {newAddress == true ? <Addaddderss
                                                        active={newAddress}
                                                        addnewadd={" "}
                                                        cancel={setNewAddress}
                                                    /> : null}

                                                </>
                                                :
                                                address.map((e) => {
                                                    setconAddress(e);
                                                    setConfirmAddress(true);
                                                })

                                        }

                                    </>
                                ) : <> <div style={{ margin: '15px 15px', }} onClick={() => setNewAddress(true)}>
                                    ADD NEW ADDRESS

                                </div>
                                {newAddress == true ? <Addaddderss
                                                        active={newAddress}
                                                        addnewadd={" "}
                                                        cancel={setNewAddress}
                                                    /> : null}
                                </>
                            }
                        </>
                    }
                />

                <CheckoutStep
                    stepNumber={"3"}
                    title={"ORDER SUMMARY"}
                    active={orderSummary}
                    body={
                        orderSummary ? Object.keys(cart.cartItem).map((key, index) => (
                            <CartItem
                                key={index}
                                cartItem={cart.cartItem[key]}
                                onQuantityInc={onQuantityIncrement}
                                onQuantityDec={onQuantityDecrement}
                                onRemoveCartItem={onRemoveCartItem}
                            />
                        )
                        ) : orderConfirmation ? (
                            <div className="stepCompleted">
                                {Object.keys(cart.cartItem).length} items
                            </div>
                        ) : null
                    }
                />

                {orderSummary && (
                    <div
                        className="flexRow sb"
                        style={{
                            padding: "20px",
                            alignItems: "center",
                        }}
                    >
                        <p style={{ fontSize: "12px" }}>
                            Order confirmation email will be sent to{" "}
                            {(user) ? <strong>{user.email}</strong> : null}
                        </p>
                        <Button onClick={userOrderConfirmation}>
                            subbmitt
                        </Button>

                    </div>
                )}

                <CheckoutStep
                    stepNumber={"4"}
                    title={"PAYMENT OPTIONS"}
                    active={paymentOption}
                    body={
                        paymentOption && (
                            <div>
                                <div
                                    className="flexRow"
                                    style={{
                                        alignItems: "center",
                                        padding: "20px",
                                    }}
                                >
                                    <input type="radio" name="paymentOption" value="cod" />
                                    <div>Cash on delivery</div>
                                </div>
                                <div
                                    className="flexRow"
                                    style={{
                                        alignItems: "center",
                                        padding: "20px",
                                    }}
                                >
                                    <input type="radio" name="paymentOption" value="card" />
                                    <div>card</div>
                                </div>
                                <Button onClick={onConfirmOrder} > CONFIRM ORDER</Button>

                            </div>
                        )
                    }
                />
            </div>

        </>
    )

}
export default Checkout
