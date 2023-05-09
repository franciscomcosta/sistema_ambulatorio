import React, { Component } from "react";
import "./style/Menu.css"
import Logo from '../multi_logo.png'


class Menu extends Component { 
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render (){
    return (
        <>
            <nav id="nav" className="nav">
                <div className="image">
                <img src={Logo} alt="multi" />
                <h3>Ambulatório</h3>
                </div>
                <ul id="nav_list" className={this.state.clicked ? "#nav_list active" : "#nav_list"}>
                    <li>
                        <a href="http://localhost:3000/home">Home</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/">Login</a>
                    </li>
                    <li>
                        <a href="">Cadastro</a>
                    </li>
                    <li>
                        <a href="">Relatório</a>
                    </li>
                </ul>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav> 
        </>
    )
}}

export default Menu;