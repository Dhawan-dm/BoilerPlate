import {Actions} from '../actions/index'

export interface inputType{
    name:string,
    user_id:string,
    password:string
}
export const signUp = (e:inputType)=>{
    return {type: Actions.SIGN_UP,
    payload : {
        name:e.name,
        userId:e.user_id,
        password:e.password,
        
    }}
}