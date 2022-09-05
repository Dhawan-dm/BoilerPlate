import styled from "styled-components";
interface StyleProps{
    variant:string
}

export const Container = styled.div`
width:60%;
height:100vh;
background: linear-gradient(to right, #5352ED 60%, #FFFFFF 50%);
`

export const ContainerTop = styled.div`
width:60%;
padding-top:8%;
padding-left:5%;
`
export const Heading = styled.h3`
margin:0px;
color:#FFFFFF;
font-weight: ${(props:StyleProps)=>props.variant === 'Light'? 100 : 'bold'};
font-family: 'Inter', sans-serif;
font-size: 30px;
`

export const ContainerBottom = styled.div`
height:100%;
width:100%;
bacgkground: url(Saly-10.svg)
`

