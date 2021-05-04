import React, {useState} from "react";
import Header from "./Header";
import Welcome from "../components/Welcome/Welcome"
import Login from "../components/Login/Login"

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
            <p>{user?<Welcome/>:<Login/>}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
