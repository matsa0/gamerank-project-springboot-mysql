/* eslint-disable eqeqeq */
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

    let navigate = useNavigate()
    
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

    const onUsernameChange=(e) => {
        setUsername(e.target.value)
    }
    const onPasswordChange=(e) => {
        setPassword(e.target.value)
    }
    const onConfirmPassword=(e) => {
        setConfirmPassword(e.target.value)
    }

    const onSubmit= async(e) => {
        e.preventDefault()
        let status_cadaster = 1;
        let username_exists = false;

        const user_data = {
            username: username,
        }

        try {
            const response = await axios.get("http://localhost:8080/users", user_data)

            if(response.status == 200) {
                const users = response.data
    
                users.forEach(user => {
                    if(username == user.username) {
                        status_cadaster = -1
                        username_exists = true
                    }
                });

                if(username_exists == false && password == confirmPassword) {
                    const new_user = {
                        username: username,
                        password: password
                    };

                    const resp_new_user =  await axios.post("http://localhost:8080/users", new_user)
    
                    if(resp_new_user.status == 201) {
                        alert("Cadastro realizado com sucesso!")
                        navigate("/home")
                        return; //evita que o código abaixo seja executado
                    }
                    else {
                        console.log("Erro ao realizar cadastro! ", resp_new_user.statusText)
                    }
                }

                if(status_cadaster == -1) {
                    alert("Username já existente!")
                }
                if(password != confirmPassword) {
                    alert("Senhas incongruentes!")
                }
            }
            else {
                console.log("HTTP status error > ", response.statusText)
            }
        }
        catch(error) {
            console.log("Erro: ", error.message)
        }
    }


    return (
        <div className="register container d-flex justify-content-center align-items-center">
            <div className="register-scope border shadow">
                <h2 className="mb-4">Cadastre-se no Gamerank!</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="form-group mb-2">
                        <label for="exampleInputUsername" className='mb-1 text-left'>Username</label>
                        <input type="text" className="form-control" placeholder="Username"
                        onChange={(e)=>onUsernameChange(e)} value={username} required/>
                    </div>
                    <div className="form-group mb-2">
                        <label for="exampleInputPassword" className='mb-1'>Senha</label>
                        <input type="password" className="form-control" placeholder="Senha" 
                        onChange={(e)=>onPasswordChange(e)} value={password} required/>
                    </div>
                    <div className="form-group mb-2">
                        <label for="exampleInputConfirmPassword" className='mb-1'>Confirmar Senha</label>
                        <input type="password" className="form-control" placeholder="Senha" 
                        onChange={(e)=>onConfirmPassword(e)} value={confirmPassword} required/>
                    </div>

                    <button type="submit" className="btn btn-success mt-4">Cadastrar</button>
                    <p className="mt-2">Voltar para área de <Link to={"/login"}>Login!</Link></p>
                </form>
            </div>
        </div>
    )
}