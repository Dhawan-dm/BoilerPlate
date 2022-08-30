import "./style.css"
import { connect } from 'react-redux';
import React, { useState } from 'react'
import { Dispatch } from 'redux';
import { signUp } from '../../store/actionCreator';
import {inputType} from '../../store/actionCreator/index'

interface signupType{
    addUser:(e:inputType)=>void
} 

function Signup(props:signupType) {
    const [input, setinput] = useState<inputType>({
        name:"",
        user_id:"",
        password:""
    });

    const nameHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setinput({...input,name:e.target.value})
    }
    const user_idHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setinput({...input,user_id:e.target.value})
    }
    const passwordHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setinput({...input,password:e.target.value})
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        props.addUser(input)
        setinput({
            name:"",
            user_id:"",
            password:""
        })
    }

  return (
    <div className="container">
        <h2 className="head">Sign Up</h2>
        <form  className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-inputs">
                <input type="text" value={input.name} className="signup-info" placeholder='Name' onChange={nameHandler}/>
                <input type="text" value={input.user_id} className="signup-info" placeholder='Username' onChange={user_idHandler}/>
                <input type="password" value={input.password} className="signup-info" placeholder='password' onChange={passwordHandler}/>
                <button type='submit' className="submit-signup">signup</button>
            </div>
        </form>
    </div>
  )
}

const mapDispaychtoProps = (dispatch:Dispatch) =>{
    return {addUser:(e:inputType)=>dispatch(signUp(e))}
}
export default connect(null, mapDispaychtoProps)(Signup)
