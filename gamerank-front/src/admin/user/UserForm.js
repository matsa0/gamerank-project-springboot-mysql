import React, {useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function UserForm() {

    const navigate = useNavigate()

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const onUsernameChange=(e)=> {
        setUsername(e.target.value)
    }
    const onPasswordChange=(e)=> {
        setPassword(e.target.value)
    }

    const onSubmit=async (e)=> {
        e.preventDefault()

        const user_data = {
            username: username,
            password: password
        }

        try {
            const response = await axios.post("http://localhost:8080/users", user_data)
            alert("Usuário adicionado com sucesso! ", response.data)
            navigate("/")
        }
        catch(error) {
            alert("Usuário não adicionado! ", error.message)
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 border shadow p-4 mx-auto mt-4"> {/*O Bootstrap trabalha com 12 colunas. Em telas médias(md) ele vai usar 6 colunas(metade)*/}
                    <h2 className="mb-4">Adicionar Usuário</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="form-group mb-2">
                            <label for="exampleInputUsername" className='mb-1'>Username</label>
                            <input type="text" className="form-control" id="exampleInputUsername" placeholder="Username" value={username} 
                            onChange={(e)=>onUsernameChange(e)} 
                            /> {/*Sempre que onChange acontecer, ele chamará a função*/}
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputPassword" className='mb-1'>Senha</label>
                            <input type="password" className="form-control" id="exampleInputPassword" placeholder="Senha" 
                            value={password}
                            onChange={(e)=>onPasswordChange(e)}
                            />
                        </div>

                        <button type="submit" className="btn btn-success mt-4">Adicionar</button>
                        <Link className="btn btn-danger mx-3 mt-4" to="/">Voltar</Link>
                    </form>
                </div>
            </div>
        </div>
    )   
}