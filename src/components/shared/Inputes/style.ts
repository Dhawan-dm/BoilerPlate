import styled from "styled-components"

interface propsType{
    variant:string
}
export const CustomInput = styled.input`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 8px 17px;
margin: 25px 0px;
gap: 10px;
width:91%;
height:15%;
border: 1px solid black;
border-radius: 14px;
font-size:20px;
`