import styles from "../style.module.css";
import React, { useState } from "react";
import axios from "axios";

const NewIntervention = (props) => {
  const [customerID, setCustomerID] = useState("");
  const [buildingID, setBuildingID] = useState("");
  const [batteryID, setBatteryID] = useState("");
  const [columnID, setColumnID] = useState("");
  const [elevatorID, setElevatorID] = useState("");
  const [report, setReport] = useState("");
  const [body, setBody] = useState("");

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
        e.preventDefault();
            axios.post(
            "/interventions/new",
            {
              customerID: customerID,
              buildingID: buildingID,
              batteryID: batteryID,
              columnID: columnID,
              elevatorID: elevatorID,
              report: report,
            }
          )
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setBody(response.data)
            console.log(body)
          })
          .catch(function (error) {
            console.log(error);
          });
        };

    return (
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <input
              value={customerID}
              name="customerID"
              onChange={changeHandler}
              className={styles.input}
              placeholder="customerID"
            ></input>
            <input
              value={buildingID}
              name="buildingID"
              onChange={changeHandler}
              className={styles.input}
              placeholder="buildingID"
            ></input>
            <input
              value={batteryID}
              name="batteryID"
              className={styles.input}
              onChange={changeHandler}
              placeholder="batteryID"
            ></input>
            <input
              value={columnID}
              name="columnID"
              className={styles.input}
              onChange={changeHandler}
              placeholder="columnID"
            ></input>
            <input
              value={elevatorID}
              name="elevatorID"
              className={styles.input}
              onChange={changeHandler}
              placeholder="elevatorID"
            ></input>
            <input
              value={report}
              name="report"
              className={styles.input}
              onChange={changeHandler}
              placeholder="report"
            ></input>
            <button type="submit" className={styles.emailbutton}>
              Login
            </button>
          </form>
        </div>);}
export default NewIntervention;

