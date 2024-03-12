import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
    
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const onUsernameChange=(e) => {
        setUsername(e.target.value)
    }
    const onPasswordChange=(e) => {
        setPassword(e.target.value)
    }

    const onSubmit= async(e) => {
        e.preventDefault()

        const user_data = {
            username: username,
            password: password
        }

        try {
            const response = await axios.get("http://localhost:8080/users", user_data)

            console.log(response.data)
        }
        catch(error) {
            alert("Erro ao tentar logar! ", error.message)
        }
    }


    return (
        <div className="container">
            <div className="row py-4">
                <div className="col-md-6 mx-auto py-4 border shadow">
                    <h2 className="mb-4">Bem vindo ao Gamerank!</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="form-group mb-2">
                            <label for="exampleInputUsername" className='mb-1 text-left'>Username</label>
                            <input type="text" className="form-control" placeholder="Username" required/>
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputPassword" className='mb-1'>Senha</label>
                            <input type="password" className="form-control" placeholder="Senha" required/>
                        </div>
                    </form>

                    <button type="submit" className="btn btn-success mt-4">Entrar</button>
                    <p className="mt-2">Não possui cadastro? <Link to={"/register"}>Cadastrar agora!</Link></p>
                </div>
            </div>
        </div>
    )
}