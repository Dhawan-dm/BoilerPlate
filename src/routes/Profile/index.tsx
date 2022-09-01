import { Navigate, useLocation } from 'react-router-dom'
import { ROOT_ROUTE, LOGIN_ROUTE } from "../../utils/routeConstants"

function Profile() {
  const location = useLocation()
let isLogged = false;
  const handleLogout = () =>{
    localStorage.clear();
    isLogged = true
  }
  
  return (
    <div>
      welcome to profile
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
