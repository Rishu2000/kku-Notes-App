import React, {useState} from "react";
import Header from "./Header";
import Welcome from "../components/Welcome/Welcome"
import Login from "../components/Login/Login"

function App() {

  const [user, setUser] = useState(null);
  const [error,setError] = useState(null);
  
  handleAuth = (username,password) => {
    const Users = {
      Praveen:"Hello123",
      Rishav:"dark123",
      rishu:"ris123"
    }
    if(!Users[username]){
      //User Dosen't exists
      setUser(null);
      setError("User not found");
    }
    else if(Users[username] !== password){
      //Password is incorrect
      setUser(null);
      setError("Password is Incorrect");
    }
    else {
      //Every thing is fine.
      setUser(username);
      setError(null);
    }
  }

  return (
    <div className="App">
      <Header dark={true} className="Header">
        Header
      </Header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>{user?<Welcome user={user}/>:<Login/>}</p>
            {!user && (<button className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                setUser("Rishav")}}
            >LogIn</button>)}
            {user && 
            (<button className="btn btn-secondary ml-3"
              onClick={(e) => {
                e.preventDefault();
                setUser(null)}}
            >LogOut</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
