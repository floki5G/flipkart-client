import { authConstants } from "../../actions/constants"
const initealstate = {

}

export const getalladdress = (state = initealstate, action) => {

    switch (action.type) {

        case authConstants.GETADDRESS_SUCCESS:
            state = {
                ...state,
               ...action.payload.address
            }
            break
    
    }
    return state
}