import { combineReducers } from "redux"
import { _getproductbyslug, _getproductbyfilterslug, _getproductdetailbyslug } from "./product"
import { _getallcategory } from "./category"
import { addtocart } from "./cart"
import { userreducer } from "./userreducer"
import { getalladdress } from "./address"
const rootReducer = combineReducers({

    getproductbyslug: _getproductbyslug,
    getallcategory: _getallcategory,
    getproductbyfilterslug: _getproductbyfilterslug,
    getproductdetailbyslug: _getproductdetailbyslug,
    auth: userreducer,
    cart:addtocart,
    address:getalladdress,

})

export default rootReducer