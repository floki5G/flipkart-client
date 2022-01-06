import { authConstants } from "../constants"
import axiosInstance from "../../api/api.axios"

export const addaddress = (payload) => {
    return async (dispatch) => {

        const res = await axiosInstance.post(`/api/user/address`, payload);

        if (res.status === 200) {
            dispatch({
                type: authConstants.ADDADDRESS_SUCCESS,
                payload: { ...res.data },
            });

        }
    }

};



export const addOrder = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.post(`/api/user/addOrder`, payload);
            if (res.status === 200) {
                const { order } = res.data;
                dispatch({
                    type: authConstants.RESET_CART,
                });
                dispatch({
                    type: authConstants.ADDORDER_SUCCESS,
                    payload: { order },
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: authConstants.ADDORDER_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};