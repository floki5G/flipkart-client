import axiosInstance from "../../api/api.axios"
import { authConstants } from "../constants"
import store from "../../store";

export const getCartItems = () => {
  return async (dispatch) => {

    const res = await axiosInstance.post(`/api/user/getCartItems`);
    console.log(res.data)
    if (res.status === 200) {
      const { cartItem } = res.data;
      if (cartItem) {
        dispatch({
          type: authConstants.ADDTOCART_SUCCESS,
          payload: {cartItem },
        });
      }
    }
  }

};


export const addToCart = (product, newQty = 1) => {

  return async (dispatch) => {

    const {
      cart: { cartItem },
      auth,
    } = store.getState();
 


    // const qty = cartItem[product._id]
    //   ? parseInt(cartItem[product._id].qty + newQty)
    //   : 1;

    const qty = newQty

    cartItem[product._id] = {
      ...product,
      qty,
    };

    const payload = {

      cartItem: 
        {
          product: product._id,
          quentity: qty,
        },
     
    };


    const res = await axiosInstance.post("/api/user/cart", payload)

    if (res.status === 200) {
      dispatch(getCartItems());
    }
    else {
      dispatch({
        type: authConstants.ADDTOCART_FILURE,
        payload: {
          error: "error addtocart"

        }
      })
    }
    dispatch({
      type: authConstants.ADDTOCART_SUCCESS,
      payload: { cartItem},
    })
  }

}



export const removeCartItem = (productId)=>{
  return async (dispatch) => {
    const res = await axiosInstance.post("/api/user/removeCartItems",productId)
    if (res.status === 200) {
      dispatch(getCartItems());
    }
    else {
      dispatch({
        type: authConstants.ADDTOCART_FILURE,
        payload: {
          error: "error removeCartItems"

        }
      })
    }

  }
}

// export const addToCart = (product, newQty = 1) => {
//     return async (dispatch) => {
//       const {
//         cart: { cartItems },
//         auth,
//       } = store.getState();
//       //console.log('action::products', products);
//       //const product = action.payload.product;
//       //const products = state.products;
//       const qty = cartItems[product._id]
//         ? parseInt(cartItems[product._id].qty + newQty)
//         : 1;
//       cartItems[product._id] = {
//         ...product,
//         qty,
//       };

//       if (auth.authenticate) {
//         dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
//         const payload = {
//           // cartItems: Object.keys(cartItems).map((key, index) => {
//           //     return {
//           //         quantity: cartItems[key].qty,
//           //         product: cartItems[key]._id
//           //     }
//           // })
//           cartItems: [
//             {
//               product: product._id,
//               quantity: qty,
//             },
//           ],
//         };
//         console.log(payload);
//         const res = await axios.post(`/user/cart/addtocart`, payload);
//         console.log(res);
//         if (res.status === 201) {
//           dispatch(getCartItems());
//         }
//       } else {
//         localStorage.setItem("cart", JSON.stringify(cartItems));
//       }

//       console.log("addToCart::", cartItems);

//       dispatch({
//         type: cartConstants.ADD_TO_CART_SUCCESS,
//         payload: { cartItems },
//       });
//     };
//   };
