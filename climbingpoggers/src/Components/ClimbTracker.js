import React, { Component } from "react"
import API_Manager from "../API_Manager/API_Manager"



export default class ClimbTracker extends Component{
    state = {}

    authenticate= () => {
        sessionStorage.setItem("userId", 1)
      }

    componentDidMount() {
        let id= sessionStorage.getItem("userId")
        if (id !== null) {
        console.log("component MOUNTED!")
        }
    }

    getUser=(id) =>{API_Manager.getUser(id).then()}
    render(){
        return(
        <div>
            <p>HELLO WORLD</p>
        </div>)
    }
}
