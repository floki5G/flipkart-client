import { authConstants } from "../../actions/constants";


const initealstate = {
   cartItem:{}

}



export const addtocart = (state = initealstate, action) => {
    
    switch (action.type) {
   
        case authConstants.ADDTOCART_SUCCESS:
            state = {
                ...state,
                cartItem: action.payload.cartItem,
            }
            break
            case authConstants.RESET_CART:
                state = {
                    ...initealstate
                }
    }
    return state
}