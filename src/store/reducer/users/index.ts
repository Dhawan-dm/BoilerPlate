import { AsyncActions } from "../../actionTypes";
import {  asyncActionTypes } from "./type"

interface stateType {
   usersData:{
   }[]
}
const initialState: stateType = {
    usersData: [],
}

const userReducer = (state = initialState, action: asyncActionTypes) => {
    switch (action.type) {
        case AsyncActions.FETCH_SUCCESS: {
            
            return {
                    ...state,
                    userData:action.payload
            }
        }
        default:
            return state
    }
}
export default userReducer;