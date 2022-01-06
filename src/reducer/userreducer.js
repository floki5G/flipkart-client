import { authConstants } from "../actions/constants";

const initealstate = {


}



export const userreducer = (state = initealstate, action) => {

    switch (action.type) {
        case authConstants.SIGNIN_SUCCESS:
            state = {
                ...state,
                ...action.payload,
    
            }
            break
    }
    return state
}