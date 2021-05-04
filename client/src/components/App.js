import React, {useState} from "react";
import Header from "./Header";

function App() {

  const [user, setUser] = useState(null);
  
  return (
    <div className="App">
      <Header dark={true} className="Header">
        Header
      </Header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>{user?`User Loged In  as ${user}`:"User Loged Out"}</p>
            <div className="Button btn btn-primary"
              onClick={(e) => {setUser("Rishav")}}
            >LogIn</div>
            <div className="Button btn btn-secondary ml-3"
              onClick={(e) => {setUser(null)}}
            >LogOut</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
