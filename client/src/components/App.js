import React, {useState} from "react";
import Axios from 'axios';
import Header from "./Header";
// import {handleLogin} from '../services/User'
import Welcome from "../components/Welcome/Welcome"
import Login from "../components/Login/Login"

function App() {

  const [user, setUser] = useState(null);
  const [error,setError] = useState(null);
  
  const handleAuth = (username,password) => {
    // handleLogin(username, password).then((res) => {console.log(res)});
    Axios.post('api/user/login',{username,password})
      .then((res) => {
        setUser(res.data.Message);
        setError(null);
      })
      .catch((err) => {
        setUser(null);
        console.dir(err)
        // setError(err);
      })
  }

  const handleLogout = () => {
    setUser(null);
    setError(null);
  }

  return (
    <div className="App">
      <Header dark={true} className="Header">
        Header
      </Header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>{user?<Welcome user={user} handleLogout={handleLogout}/>:<Login handleAuth={handleAuth} error={error}/>}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
