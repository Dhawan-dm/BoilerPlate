import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'
import { ROOT_ROUTE, LOGIN_ROUTE } from "../../utils/routeConstants"

interface ProfilePropsType{
  users:any
}

function Profile(props:ProfilePropsType) {
  
  
  return (
    props.users.map((user:any, index:number)=>{
      <div key={index}>
        {user}
      </div>
    })
  );
}

const mapStateToProps = (state: any) => {
  return {
    users:state.users
  }
}

  export default connect(mapStateToProps)(Profile)
