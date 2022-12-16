import React from "react";
import styles from "../style.module.css";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const changeHandler = (e) => {

    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(
      `https://java-api.codeboxxtest.xyz/authenticate?email=${email}&password=${password}`
    );
    var token = "";
    axios
      .post(`/authenticate?email=${email}&password=${password}`)
      .then((result) => {
        console.log(
          `https://java-api.codeboxxtest.xyz/authenticate?email=${email}&password=${password}`
        );
        const token = String(result.data["access_token"]);
        console.log("result: " + token);
        localStorage.setItem("token", token);
        navigate('/home')
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Login");
      });
    console.log(token);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={submitHandler}>
        <input
          value={email}
          name="email"
          onChange={changeHandler}
          className={styles.emailinput}
          placeholder="email"
        ></input>
        <input
          value={password}
          name="password"
          onChange={changeHandler}
          className={styles.passwordinput}
          placeholder="Password"
        ></input>
        <button type="submit" className={styles.emailbutton}>
          Login
        </button>
      </form>
    </div>);}
export default Form;