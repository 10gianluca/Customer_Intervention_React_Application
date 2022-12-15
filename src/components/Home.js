import styles from "../style.module.css";
import React, { useState, useEffect, Component } from "react";
import shortid from 'shortid'
import axios from 'axios'
import password from "./password";
import email from "./email";
  
function Home(){
            return(
                <div className={styles.form}>
                    <h1>Helllllooooo worlds
                    </h1>
                </div>);
}
export default Home;