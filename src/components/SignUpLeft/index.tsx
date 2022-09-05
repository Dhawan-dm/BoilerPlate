import React from 'react';
import {Container, ContainerBottom, ContainerTop, Heading} from './style'

function SignUpLeft() {
  return (
    
      <Container>
        <ContainerTop>
            <Heading variant={'Light'}>Welcome,</Heading>
            <Heading variant={'dark'}>Get Started</Heading>
        </ContainerTop>
        <ContainerBottom >
            <img src="Saly-10.svg" alt="" />    
        </ContainerBottom>
      </Container>
   
  );
}

export default SignUpLeft;
