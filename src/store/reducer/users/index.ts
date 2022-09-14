import { AsyncActions } from "../../actionTypes";
import {  asyncActionTypes } from "./type"

export interface stateType {
   usersData:[]
}
const initialState: stateType = {
    usersData:[],
}

const userReducer = (stateUser = initialState, action: asyncActionTypes) => {
    switch (action.type) {
        case AsyncActions.SUCCESS: {
            
            return {
                ...stateUser,
                usersData:action.payload
            }
        }
        default:
            return stateUser
    }
}
export default userReducer;