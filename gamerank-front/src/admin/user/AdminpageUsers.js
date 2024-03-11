import axios from 'axios'
import React, { useEffect, useState } from  'react'
import { Link } from 'react-router-dom'

export default function AdminpageUsers() {

    const [users, setUsers] = useState([])

    const loadUsers= async() => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data)
    }

    useEffect(() => {
        loadUsers()
    }, [])

    const deleteUsers= async(id) => {
        await axios.delete(`http://localhost:8080/users/${id}`)
        loadUsers()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="py-4 col-md-8 mx-auto">
                    <h2 className='mb-4'>Usuários</h2>
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Username</th>
                                <th scope='col'>Senha</th>
                                <th scope='col'>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>
                                        <Link className = "btn btn-outline-success bi bi-eye" to={"/users"} />

                                        <Link className = "btn btn-outline-primary bi bi-arrow-repeat mx-3" to={"/users"}/>

                                        <i className = "btn btn-outline-danger bi bi-dash-lg"
                                        onClick={()=>deleteUsers(user.id)}></i>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Link className = "btn btn-primary mx-3" to={"/"}><i class="bi bi-arrow-left"></i> Jogos</Link>
        </div>
    )
}