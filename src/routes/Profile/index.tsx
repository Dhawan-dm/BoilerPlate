import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { request } from '../../store/actions';
import { stateType } from '../../store/reducer/users';

interface ProfilePropsType{
  users:[],
  fetch:()=>void
}

function Profile(props:ProfilePropsType) {
  
  useEffect(() => {
    props.fetch()
  },[])

  console.log(props.users);
  console.log(props);
  
  return (<div></div>)

}

const mapStateToProps = (stateUser: any) => {
  console.log(stateUser);

  return {
    users:stateUser.userReducer.userData
  }
}
const mapdispatchToProps = (dispatch: Dispatch) => {
  return {
    fetch:()=>dispatch(request())
  }
}

  export default connect(mapStateToProps, mapdispatchToProps)(Profile)
