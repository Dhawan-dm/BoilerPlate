import {
  BrowserRouter as Router,
  useRoutes
} from "react-router-dom";
import Login from "./Login";
import Signup from './Signup/index'
import { ROOT_ROUTE, LOGIN_ROUTE } from "../utils/routeConstants"

function App() {

  const AppRoute = () => {
    let routes = useRoutes([
      { path: ROOT_ROUTE, element: <Signup /> },
      { path: LOGIN_ROUTE, element: <Login /> }
    ]);
    return routes;
  };

  return (
    <div className="App">
      <Router>
        <AppRoute />
      </Router>
    </div>
  );
}

export default App;
