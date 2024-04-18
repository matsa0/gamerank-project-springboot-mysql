import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    
    let navigate = useNavigate()

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    //onVarChange atualiza os estados criados em cima, enquanto o usuário digita(evento onChange()), ou seja, captura informações dos inputs
    const onUsernameChange=(e) => {
        setUsername(e.target.value)
    }
    const onPasswordChange=(e) => {
        setPassword(e.target.value)
    }

    
    const onSubmit= async(e) => {
        e.preventDefault()
        let valid_login = false

        const user_data = {
            username: username,
            password: password
        }

        try {
            const response = await axios.get("http://localhost:8080/users", user_data)
            
            if(response.status == 200) {
                const users = response.data
    
                users.forEach(user => {
                    if(username == user.username && password == user.password) {
                        valid_login = true
                    }
                });
                
                if(valid_login == true) {
                    if(username == "admin" && password == "admin") {
                        navigate("/admin_games")
                        return;
                    }
                    alert("Login realizado com sucesso!")
                    navigate("/home")
                }
                else {
                    alert("Credenciais incorretas! Tente novamente.")
                }
            } 
            else {
                console.log("Erro ao obter resposta de usuários: ", response.statusText)
            }
        } 
        catch(error) {
            console.log("Erro ao tentar logar: ", error)
        }

    }


    return (
        <div className="login container d-flex justify-content-center align-items-center">
            <div className="login-scope border shadow">
                <h2 className="mb-4">Entre no Gamerank!</h2>
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

                    <button type="submit" className="btn btn-success mt-4">Entrar</button>
                    <p className="mt-2">Não possui cadastro? <Link to={"/register"}>Cadastrar agora!</Link></p>
                </form>
            </div>
        </div>
    )
}