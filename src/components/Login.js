import Form from "../components/Form"
import Home from "../components/Home"
import NewIntervention from "../components/NewIntervention"

import emailList from "../components/emailList";
import passwordList from "../components/passwordList";
import { useState } from "react";
function Login() {
  const [email,setemail] = useState("");
  const [emailList, setemailList] = useState([]);
  const [password,setpassword] = useState("");
  const [passwordList, setpasswordList] = useState([]);


  return( 
    <div className="Login">
      <Form 
        email={email} 
        setemail={setemail}
        emailList={emailList} 
        setemailList={setemailList}
        password={password} 
        setpassword={setpassword}
        passwordList={passwordList} 
        setpasswordList={setpasswordList}
      ></Form>
      <emailList emailList={emailList}/>
      <passwordList passwordList={passwordList}/>
      
    </div>
  );
}

export default Login;