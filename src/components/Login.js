import React,{useState, useEffect} from "react"
import { Form } from "react-router-dom"
import "./style/Login.css"


function Login (){

const [log, setLog] = useState()
const [login, setLogin] = useState()

const changevalue = (event) =>{
    setLog((prevevent) =>({
      ...prevevent,
      [event.target.name]: event.target.value,
    }))
}



const inputValues = (event) => {
    event.preventDefault();
    setLogin(log)
    setLog("")
    if(login == "undefined"){
        alert("Usuário e/ou senha incorretos!")
    }
    
}


    return(
        <>  
            <div className="formContainer">
                <form value={log} onChange={changevalue} className="form" onSubmit={inputValues}>
                    <h3>Login</h3>
                    <input type='text' name="usuario" placeholder="Usuário"/>
                    <input type="password" name="senha" placeholder="Senha"/>
                    <button type="submit" >Entrar</button>
                    <h4 className="h42">Esqueceu sua senha?</h4>
                </form>
            </div>
        </>
    )
    
}

export default Login;