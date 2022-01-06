import { authConstants } from "../constants";
import axiosInstance from "../../api/api.axios";

// export const getallproduct = () => {
//     return async (dispatch) => {
//         const res = await axiosInstance.post('api/admin/product/getallproduct')
//         if (res.status == 200) {
        
//             dispatch({
//                 type: authConstants.PRODUCT_SUCCESS,
//                 payload: {
//                     ...res.data
//                 }
//             })
//         }
//         else {
//             dispatch({
//                 type: authConstants.PRODUCT_FILURE,
//                 payload: {
//                     error: "error get all data"
//                 }
//             })
//         }

//     }
// }

export const getproductbyslug = (slug) => {
    return async (dispatch) => {
        const res = await axiosInstance.post(`api/user/product/getproductbyslug/${slug}`)

        if (res.status == 200) {
            dispatch({
                type:authConstants.GETPRODUCTBYSLUG_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }

        else {
            dispatch({
                type:authConstants.GETPRODUCTBYSLUG_FILURE,
                payload: {
                    error: "error get all data"

                }
            })

        }
    }
}



export const getproductbyfilterslug = (slug,cid) => {
    return async (dispatch) => {
        const res = await axiosInstance.post(`api/user/product/getproductbyfilterslug/${slug}/${cid}`)

        if (res.status == 200) {
            dispatch({
                type:authConstants.GETPRODUCTBYFILTERSLUG_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }

        else {
            dispatch({
                type:authConstants.GETPRODUCTBYFILTERSLUG_SUCCESS,
                payload: {
                    error: "error get all data"

                }
            })

        }
    }
}





export const getproductdetailbyslug = (slug,productid) => {
    return async (dispatch) => {
        const res = await axiosInstance.post(`api/user/product/getproductdetailbyslug/${slug}/${productid}/productdetail`)

        if (res.status == 200) {

            dispatch({
                type:authConstants.GETPRODUCTDETAIL_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }

        else {
            dispatch({
                type:authConstants.GETPRODUCTDETAIL_FILURE,
                payload: {
                    error: "error get all data"

                }
            })

        }
    }
}
