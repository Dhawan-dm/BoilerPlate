import React from 'react'
import { CustomButton } from './style'

interface PropsType{
  page:string
}
function Button(props:PropsType) {
  return (
   <CustomButton>{props.page}</CustomButton>
  )
}

export default Button