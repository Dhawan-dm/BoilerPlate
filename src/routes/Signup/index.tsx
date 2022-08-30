import "./style.css"
import { connect } from 'react-redux';
import React, { useState } from 'react'
import { Dispatch } from 'redux';
import { signUp } from '../../store/actions';
import {inputType} from '../../store/actions/index'

interface signupType{
    addUser:(e:inputType)=>void
} 

function Signup(props:signupType) {
    const [input, setinput] = useState<inputType>({
        name:"",
        userId:"",
        password:""
    });

    const nameHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setinput({...input,name:e.target.value})
    }
    const userIdHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setinput({...input,userId:e.target.value})
    }
    const passwordHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setinput({...input,password:e.target.value})
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        props.addUser(input)
        setinput({
            name:"",
            userId:"",
            password:""
        })
    }

  return (
    <div className="container">
        <h2 className="head">Sign Up</h2>
        <form  className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-inputs">
                <input type="text" value={input.name} className="signup-info" placeholder='Name' onChange={nameHandler}/>
                <input type="text" value={input.userId} className="signup-info" placeholder='Username' onChange={userIdHandler}/>
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
