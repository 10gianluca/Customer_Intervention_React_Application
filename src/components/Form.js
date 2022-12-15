import styles from "../style.module.css";
import shortid from 'shortid'
import axios from 'axios'
import React, { Component } from 'react';
import password from "./password";
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
        console.log(this.state)
        axios
            .post('/swagger-ui/index.html#/Authentication', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
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