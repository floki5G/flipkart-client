import { authConstants } from "../../actions/constants";

const initealstate = {
    issuccess: false,
    isfailed: false,

}

export const _getproductbyslug = (state = initealstate, action) => {
    switch (action.type) {
        case authConstants.GETPRODUCTBYSLUG_SUCCESS:
            state = {
                ...state,  
                issuccess: true,
                isfailed: false,
                product:action.payload
             
            }
            break
            case authConstants.GETHIGHLIGHT_SUCCESS:
                state = {
                    ...state,
         
                    highlight: action.payload.highlightparentId,
                
                }
                break
    }
    return state
}

export const _getproductbyfilterslug = (state = initealstate, action) => {
    switch (action.type) {
        case authConstants.GETPRODUCTBYFILTERSLUG_SUCCESS:
            state = {
                ...state,
                product: action.payload,
                issuccess: true,
                isfailed: false
            }
            break
            case authConstants.GETHIGHLIGHT_SUCCESS:
                state = {
                    ...state,
                    highlight: action.payload.highlightparentId,
                
                }
                break

    }
    return state
}

export const _getproductdetailbyslug = (state = initealstate, action) => {
    switch (action.type) {
        case authConstants.GETPRODUCTDETAIL_SUCCESS:
            state = {
                ...state,
                ...action.payload,
                issuccess: true,
                isfailed: false
            }
            break


    }
    return state
}


