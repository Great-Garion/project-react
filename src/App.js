// import "bootstrap/st/css/bootstrap.min.css";
import { useContext } from "react";

import "./App.css";

import Login from "./Components/Login";

import { UserContext } from "./Context/userProvider";

function App() {
  let { isLogin, setIsLogin } = useContext(UserContext);
  console.log(isLogin);

  function LogOut() {
    setIsLogin(false);
    localStorage["isLogin"] = false;
  }
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
