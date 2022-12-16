import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styles from "./style.module.css";
import './style.module.css';
import Home from "./components/Home";
import Login from "./components/Login";
import NewIntervention from "./components/NewIntervention";

function App() {
  return( 
    <>
    <nav>
        <div> 
          <h1 className={styles.header}></h1>
          <img className={styles.logo} src="/images/R2.png"/>
        </div>
    </nav>
    <Routes>
      <Route   path="/" element={<Login />} />
      <Route   path="/home" element={<Home />} />
      <Route   path="/NewIntervention" element={<NewIntervention />} />
    </Routes>
    </>
  );
}

export default App;

