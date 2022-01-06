import axiosInstance from "../../api/api.axios"
import { authConstants } from "../constants"

export const getnewpagebycategory = (props) => {
    return async (dispatch) => {
        const {cid,pagetype} = props.params
        const res = await axiosInstance.post(`api/user/getnepagebycat/${cid}/${pagetype}`)
      
            if(res.status ===200){
                dispatch({
                    type:authConstants.GETNEWPAGEBYCATEGORY_SUCCESS,
                    payload:{
                        ...res.data
                    }
                })
            }
            else{
                dispatch({
                    type:authConstants.GETPRODUCTBYSLUG_FILURE,
                    payload:{
                        error:"something went wrong getallproductby category"
                    }
                })
            }
    }
}