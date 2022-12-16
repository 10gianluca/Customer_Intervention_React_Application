import styles from "../style.module.css";
import React from "react";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const token = localStorage.getItem("token");
  const [body, setBody] = useState();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(token);
    axios.get('/interventions', {
      headers: {
        'Authorization': `Bearer ${token} `,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setBody(response.data)
      console.log(body)
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const newInter = (e) => {
    e.preventDefault();
    navigate('/NewIntervention')

  };
  return(
    <div className={styles.form}>
      <h1>List Of Interventions</h1>
      <button onClick={submitHandler}>Get List Of Interventions</button>
      <button onClick={newInter}>New Intervention</button>
      <pre>{JSON.stringify(body, null, 2)}</pre>

    </div>
  );
}

export default Home