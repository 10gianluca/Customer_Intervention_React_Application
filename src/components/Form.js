import styles from "../style.module.css";
import React, { useState, useEffect, Component } from "react";
import shortid from 'shortid'
import axios from 'axios'
import password from "./password";
import email from "./email";

class Form extends Component {    
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '' 
        }
    }
    
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(`https://java-api.codeboxxtest.xyz/authenticate?email=${this.state.email}&password=${this.state.password}`)
        var x = "";
        axios.post(`/authenticate?email=${this.state.email}&password=${this.state.password}`)
            .then(result => {
                console.log(`https://java-api.codeboxxtest.xyz/authenticate?email=${email}&password=${password}`)
                x = result.data["access_token"]
                console.log("result: " + x)
                localStorage.setItem("user-info", JSON.stringify(x))
    
            }).catch((error) => {
                console.log(error)
                alert("Invalid Login")
            })
            console.log(x)
    }
    render(){
        const {email, password} = this.state
            return(
                <div className={styles.form}>
                    <form onSubmit={this.submitHandler}>
                        <input value={email} name="email" onChange={this.changeHandler}className={styles.emailinput} placeholder="email"></input>
                        <input value={password} name="password" onChange={this.changeHandler}className={styles.passwordinput} placeholder="Password"></input>
                        <button type="submit" className={styles.emailbutton}>Login</button>
                    </form>
                </div>)
    };
};
export default Form;