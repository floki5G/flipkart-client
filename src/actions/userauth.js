import axiosInstance from "../api/api.axios";
import { authConstants } from "./constants";

export const signin = ( userdata) => {

    return async (dispatch) => {
        const res = await axiosInstance.post("/api/signin", userdata)
        console.log(res.data)

        if (res.status === 200) {


            const { token, user } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user",JSON.stringify(user))
        }

    }

}


export const isusersignin = (user) => {

    return  (dispatch) => {

      const token =  localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"))
      if (token){
            dispatch({
                type: authConstants.SIGNIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            dispatch({
                type: authConstants.SIGNIN_FILURE,
                payload: { error:"error invalid login" }
            })
        }

    
    }
}


export const sighout = (usesignout) => {

    return async (dispatch) => {
        const res = await axiosInstance.post("/api/signout")
        if (res.status === 200) {
            dispatch({
                type: authConstants.SIGNOUT_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }
        else {
            dispatch({
                type: authConstants.SIGNOUT_FILURE,
                payload: {
                    error: "error get all data"
                }
            })
        }
    }

}