import React from "react";
import styles from "../style.module.css";

import { useState } from "react";
import shortid from "shortid";
import axios from "axios";
import password from "./password";
import email from "./email";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  // use the useState hook to initialize and manage state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const changeHandler = (e) => {
    // update the state using the appropriate setter
    // function based on the input field name
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
        token = result.data["access_token"];
        console.log("result: " + token);
        localStorage.setItem("token", JSON.stringify(token));
        navigate('/home')
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Login");
      });
    console.log(token);
  };

  // return the JSX markup directly from the component body
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