import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

export default function ViewUser() {

    const { id } = useParams()

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")


    useEffect(() => {
        loadUser()
    }, [])

    const loadUser= async()=> {
        try {
            const result = await axios.get(`http://localhost:8080/users/${id}`)
    
            const user_data = result.data
    
            setUsername(user_data.username)
            setPassword(user_data.password)

        }
        catch (error) {
            alert("Erro ao carregar o usuário! ", error.message)
        }
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-10 border shadow mx-auto mt-4 p-4">
                    <h2 className="mb-4">Visualizar Usuário</h2>
                    <hr/>

                    <h5 className="font-weight-bold">ID</h5>
                    <p>{id}</p>
                    <hr/>

                    <h5 className="font-weight-bold">Username</h5>
                    <p>{username}</p>
                    <hr/>   

                    <h5 className="font-weight-bold">Year</h5>
                    <p>{password}</p>
                    <hr/>


                    <Link className="btn btn-primary mx-3 mt-4" to={"/admin_users"}>Voltar</Link>
                </div>
            </div>
        </div>
    )
}