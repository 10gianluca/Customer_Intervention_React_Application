import styles from "../style.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const NewIntervention = (props) => {
  const [customerID, setCustomerID] = useState("");
  const [buildingID, setBuildingID] = useState("");
  const [batteryID, setBatteryID] = useState("");
  const [columnID, setColumnID] = useState("");
  const [elevatorID, setElevatorID] = useState("");
  const [report, setReport] = useState("");
  const [body, setBody] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();


    const changeHandler = (e) => {

        if (e.target.name === "customerID") {
            setCustomerID(e.target.value);
        } else if (e.target.name === "buildingID") {
            setBuildingID(e.target.value);
        } else if (e.target.name === "batteryID") {
            setBatteryID(e.target.value);
        }else if (e.target.name === "columnID") {
            setColumnID(e.target.value);  
        }else if (e.target.name === "elevatorID") {
            setElevatorID(e.target.value);
        }else if (e.target.name === "report") {
            setReport(e.target.value);
        }else if (e.target.name === "body") {
            setBody(e.target.value);
        }
      };
      const handleSubmit = async (e) => {
        console.log(token);
            e.preventDefault();
            const data = {
                "customerID": customerID,
                "buildingID": buildingID,
                "batteryID": batteryID,
                "columnID": columnID,
                "elevatorID": elevatorID,
                "report": report
              };
              
              const config = {
                method: 'post',
                url: '/interventions/new',
                headers: {
                    'Authorization': `Bearer ${token} `,
                    'Accept': 'application/json'
                  },
                data,
              };
              
              axios(config)
                .then(function (response) {
                  console.log(JSON.stringify(response.data));
                  setBody(response.data)
                  console.log(body)
                  navigate('/Home')

                })
                .catch(function (error) {
                  console.log(error);
                });
            }
    return (
        <div className={styles.form2}>
          <form onSubmit={handleSubmit}>
            <input
              value={customerID}
              name="customerID"
              type="number"
              onChange={changeHandler}
              className={styles.input2}
              placeholder="customerID"
            ></input>
            <input
              value={buildingID}
              name="buildingID"
              type="number"
              onChange={changeHandler}
              className={styles.input2}
              placeholder="buildingID"
            ></input>
            <input
              value={batteryID}
              name="batteryID"
              type="number"
              className={styles.input2}
              onChange={changeHandler}
              placeholder="batteryID"
            ></input>
            <input
              value={columnID}
              name="columnID"
              type="number"
              className={styles.input2}
              onChange={changeHandler}
              placeholder="columnID"
            ></input>
            <input
              value={elevatorID}
              name="elevatorID"
              type="number"
              className={styles.input2}
              onChange={changeHandler}
              placeholder="elevatorID"
            ></input>
            <input
              value={report}
              name="report"
              type="string"
              className={styles.input2}
              onChange={changeHandler}
              placeholder="report"
            ></input>
            <button type="submit" className={styles.submitbutton2}>
              Submit
            </button>
          </form>
          <pre className={styles.list2}>{JSON.stringify(body, null, 2)}</pre>
        </div>);}
export default NewIntervention;
    
