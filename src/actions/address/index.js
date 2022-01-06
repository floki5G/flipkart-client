import axiosInstance from "../../api/api.axios"
import { authConstants } from "../constants"




export const getaddress = () => {
    return async (dispatch) => {
  
      const res = await axiosInstance.post(`/api/user/getaddress`);
      if (res.status === 200) {
     
          dispatch({
            type: authConstants.GETADDRESS_SUCCESS,
            payload: {...res.data },
          });
      
      }
    }
  
  };