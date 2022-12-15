import styles from "../style.module.css";
import React from "react";
import axios from 'axios'

const Home = (props) => {
  const token = localStorage.getItem("token");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(token);
    axios.get('/interventions', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
      .then((res) => {
        console.log(body);
        const body = res.data;
        return body;
      }).catch(error => console.error(error))
  };

  return(
    <div className={styles.form}>
      <h1>Helllllooooo worlds</h1>
      <button onClick={submitHandler}>hello</button>
    </div>
  );
}

export default Home