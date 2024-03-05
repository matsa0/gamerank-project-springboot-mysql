import React from 'react'

//componente Adminpage - exportado e pode ser importado em outro lugar
export default function Adminpage() {
    return (
        <div classname='container'>
            <div className='py-4'>
                <table className="table border shadow m-10">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ano</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Desc curta</th>
                        <th scope="col">Desc completa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Olá, Mundo!</td>
                            <td>Olá, Mundo! Me chamo Matheus</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Olá, Mundo!</td>
                            <td>Olá, Mundo! Me chamo Matheus</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}