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
export const fetchRequest = () => {
    return {
        type: AsyncActions.FETCH_REQUESTED,
        payload: {
            name: "",
            userId: "",
            password: "",

        }
    }
}
export const fetchSuccess = (data:any) => {
    return {
        type: AsyncActions.FETCH_SUCCESS,
        payload:data
    }
}