import React from 'react';
import Check from '../shared/Checkbox';
import { CustomInput } from '../shared/Inputes/style';
import { Container, ContainerContent, ContainerInputTop, ContainerInputBottom, Label, ChecboxContainer } from './style';

function SignUpRight() {
    return (
        <Container>
            <ContainerContent>
                <ContainerInputTop>
                    <CustomInput></CustomInput>
                    <CustomInput></CustomInput>
                    <CustomInput></CustomInput>
                </ContainerInputTop>
                <ContainerInputBottom>
                    <ChecboxContainer>
                        <Check></Check>
                        <Label>By signing up, you agree to the Terms of Service and Privacy Policy</Label>
                    </ChecboxContainer>
                </ContainerInputBottom>
            </ContainerContent>
        </Container>
    );
}

export default SignUpRight;
