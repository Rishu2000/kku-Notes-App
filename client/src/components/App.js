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
            <button className="Button btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                setUser("Rishav")}}
            >LogIn</button>
            <button className="Button btn btn-secondary ml-3"
              onClick={(e) => {
                e.preventDefault();
                setUser(null)}}
            >LogOut</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
