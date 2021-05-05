import React, {useState} from "react";
import Header from "./Header";
import Welcome from "../components/Welcome/Welcome"
import Login from "../components/Login/Login"

function App() {

  const [user, setUser] = useState(null);
  
  handleAuth = (username,password) => {
    const Users = {
      Praveen:"Hello123",
      Rishav:"dark123",
      rishu:"ris123"
    }
    if(Users[username]){
      //User Dosen't exists
    }
    else if(Users[username] !== password){
      //Password is incorrect
    }
    else {
      //Every thing is fine.
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
