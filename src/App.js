import Header from "./components/Header";
import Form from "./components/Form"
import Home from "./components/Home"
import Login from "./components/Login"
import NewIntervention from "./components/NewIntervention"

import emailList from "./components/emailList";
import passwordList from "./components/passwordList";
import { useState } from "react";
function App() {
  const [email,setemail] = useState("");
  const [emailList, setemailList] = useState([]);
  const [password,setpassword] = useState("");
  const [passwordList, setpasswordList] = useState([]);
  return( 
    <div className="App">
      <Header></Header>
      <Home/>
      <NewIntervention/>
      <Login/>
    </div>
  );
}

export default App;

