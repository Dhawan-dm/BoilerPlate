import { Actions, AsyncActions } from '../actionTypes/index'

export interface inputType {
    name: string,
    userId: string,
    password: string
}
export const signUp = (e: inputType) => {
    return {
        type: Actions.SIGN_UP,
        payload: {
            name: e.name,
            userId: e.userId,
            password: e.password,

        }
    }
}
export const request = () => {
    return {
        type: AsyncActions.REQUEST_DATA,
       
    }
}
export const success = (data:any) => {
    return {
        type: AsyncActions.SUCCESS,
        payload:data
    }
}