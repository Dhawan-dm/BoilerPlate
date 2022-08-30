import { signUp } from "../actionCreator";
import { Actions } from "../actions";
import {actionTypes} from "./type"

interface stateType{
    users:{
        name:string,
        userId:string,
        password:string
    }[]
}
const initialState:stateType = {
    users : []
}

const reducer = (state = initialState, action:actionTypes)=>{
    switch(action.type){
        case Actions.SIGN_UP:{
            return {...state, users:[action.payload, ...state.users]}
        }
        default:
            return state     
    }
} 
export default reducer;