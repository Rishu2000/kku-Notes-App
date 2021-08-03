import React, {useState, useEffect} from "react";
import Axios from 'axios';
import Header from "./Header";
// import {handleLogin} from '../services/User'
import Welcome from "../components/Welcome/Welcome"
import Login from "../components/Login/Login"

function App() {

  const [user, setUser] = useState(null);
  const [errorAuth,setErrorAuth] = useState(null);
  const [errorReg, setErrorReg] = useState(null);
  const [regUser, setRegUser] = useState(null);

  useEffect(() => {
    Axios.get('/api/user').then((res) => {
      setUser(res.data);
    })
  }, [])
  
  const handleAuth = (username,password) => {
    // handleLogin(username, password).then((res) => {console.log(res)});
    Axios.post('api/user/login',{username,password})
      .then((res) => {
        setUser(res.data.Message);
        setErrorAuth(null);
        setErrorReg(null);
      })
      .catch((err) => {
        setUser(null);
        setErrorAuth(err.response.data.Message);
      })
  }

  const handleLogout = () => {
    Axios.get('/api/user/logout')
      .then((res) => {
        setUser(null);
        setErrorAuth(null);
        setErrorReg(null);
        setRegUser(null);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleReg = (username, password) => {
    Axios.post('api/user/register',{username,password})
      .then((res) => {
        setRegUser(res.data.Message);
        setErrorReg(null);
        setErrorAuth(null);
      })
      .catch((err) => {
        setRegUser(null);
        setErrorReg(err.response.data.Message);
      })
  }
 
  return (
    <div className="App">
      <Header dark={true} className="Header">
        Header
      </Header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {user?<Welcome user={user} handleLogout={handleLogout}/>:<Login 
                handleAuth={handleAuth} 
                handleReg={handleReg} 
                errorAuth={errorAuth}
                errorReg={errorReg}
                regUser={regUser}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
