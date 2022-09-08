import LoginSignUpLeft from '../../components/LoginSignUpLeft'
import LoginSignUpRight from '../../components/LoginSignUpRight'
import { Wrapper } from './style'

function Login() {
  return (
    <Wrapper>
      <LoginSignUpLeft page = {'Login'}></LoginSignUpLeft>
      <LoginSignUpRight page = {'Login'}></LoginSignUpRight>
    </Wrapper>
  )
}

export default Login