import axiosInstance from "../../api/api.axios"
import { authConstants } from "../constants"

export const gethighlight= (parentid) => {

    return async (dispatch) => {
        const res = await axiosInstance.post(`api/admin/highlight/getallhighlight/${parentid}`)
        
        if (res.status == 200) {
            dispatch({
                type: authConstants.GETHIGHLIGHT_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }
        else {
            dispatch({
                type: authConstants.GETHIGHLIGHT_FILURE,
                payload: {
                    error: "error get all HIGHLIGHTS"
                }
            })
        }

    }
}