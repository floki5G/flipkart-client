import axiosInstance from "../../api/api.axios"
import { authConstants } from "../constants"

export const getallcategory = () => {
    return async (dispatch) => {
        const res = await axiosInstance.post("api/admin/category/getallcatagory")
        if (res.status === 200) {
            dispatch({
                type: authConstants.GETALLCATEGORY_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }
        else {
            dispatch({
                type: authConstants.GETALLCATEGORY_FILURE,
                payload: {
                    error: "error get all data"
                }
            })
        }

    }
}