import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductdetailbyslug } from "../../actions/products";
import { addToCart } from "../../actions/addtocart";
import "./style.css";

const Productdatail = (props) => {

    const selector = useSelector(state => state.getproductdetailbyslug)
    const dispatch = useDispatch();

    useEffect(() => {
        const { match } = props
        dispatch(getproductdetailbyslug(match.params.slug, match.params.productid))
    }, []);

    return (
        <>

            <div className="productDescriptionContainer">
                <div className="flexRow">
                    <div className="verticalImageStack">
                        <div className="thumbnail">
                            <img src="https://rukminim1.flixcart.com/image/312/312/ktx9si80/mobile/d/n/p/narzo-50a-rmx3430-realme-original-imag75kymngzyabx.jpeg?q=70" />
                        </div>
                    </div>
                    <div className="productDescContainer">
                        <div className="productDescImgContainer">
                            <img
                                src="https://rukminim1.flixcart.com/image/312/312/ktx9si80/mobile/d/n/p/narzo-50a-rmx3430-realme-original-imag75kymngzyabx.jpeg?q=70"

                            />
                        </div>

                        {/* action buttons */}
                        <div className="flexRow">

                            <div onClick={() => {
                                const { _id, name, price } =(selector.issuccess == true) ? selector.products[0]:null
                                const {img} = (selector.issuccess == true) ? selector.products[0].productPicture[0]:null
                                dispatch(addToCart({ _id, name, price, img }));
                                props.history.push(`/cart`);
                                // console.log(img)
                            }}>add to cart</div>
                            <div>buy now</div>

                        </div>
                    </div>
                </div>
                <div>
                    {/* home > category > subCategory > productName */}
                    <div className="breed">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Mobiles</a>
                            </li>
                            <li>
                                <a href="#">Samsung</a>
                            </li>
                            <li>
                                <a href="#">{(selector.issuccess == true) ? selector.products[0].name : null}</a>
                            </li>
                        </ul>
                    </div>
                    {/* product description */}
                    <div className="productDetails">
                        <p className="productTitle">{(selector.issuccess == true) ? selector.products[0].name : null}</p>
                        <div>
                            <span className="ratingCount">
                                4.3
                            </span>
                            <span className="ratingNumbersReviews">
                                72,234 Ratings & 8,140 Reviews
                            </span>
                        </div>
                        <div className="extraOffer">

                            4500 off{" "}
                        </div>
                        <div className="flexRow priceContainer">
                            <span className="price">

                                {(selector.issuccess == true) ? selector.products[0].price : null}
                            </span>
                            <span className="discount" style={{ margin: "0 10px" }}>
                                22% off
                            </span>
                            {/* <span>i</span> */}
                        </div>
                        <div>
                            <p
                                style={{
                                    color: "#212121",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                Available Offers
                            </p>
                            <p style={{ display: "flex" }}>
                                <span
                                    style={{
                                        width: "100px",
                                        fontSize: "12px",
                                        color: "#878787",
                                        fontWeight: "600",
                                        marginRight: "20px",
                                    }}
                                >
                                    Description
                                </span>
                                <span
                                    style={{
                                        fontSize: "12px",
                                        color: "#212121",
                                    }}
                                >
                                    {(selector.issuccess == true) ? selector.products[0].description : null}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Productdatail