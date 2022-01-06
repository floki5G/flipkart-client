import { getallcategory } from "../../actions";
import { authConstants } from "../../actions/constants";
const initealstate = {
    categories:[],
    issuccess: false,
    isfailes: false
}


export const _getallcategory = (state =initealstate, action) => {

    switch (action.type) {

        case authConstants.GETALLCATEGORY_SUCCESS:
            state = {
                ...state,
              
                   categories:action.payload._categorylist,

                issuccess: true,
                isfailes: false
            }
            break
    }
    return state


}