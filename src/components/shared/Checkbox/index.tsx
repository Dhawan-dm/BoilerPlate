import { Checked } from './style'

interface PropsType{
  color: string;
}

function Check(props:PropsType) {
  return (
    <Checked color='blue'>
    </Checked>
  )
}

export default Check