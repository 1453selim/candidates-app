import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../action'
import Detail from './Detail'
import { Routes, Route } from 'react-router-dom'

export default function Canditates() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const state = useSelector(state => state)

    const { users } = state

    users.sort((a, b) => a.name.localeCompare(b.name))

    const [inputVal, setInputVal] = useState("")

    const filterUsers = users.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase()))

    return (
        <div>
            <h1>Canditates</h1>

            <input onChange={(e) => setInputVal(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>

                    {filterUsers.map((item, i) => (

                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td><Link to={"detail/" + item.id} className="btn btn-primary">Details</Link></td>
                        </tr>

                    ))}

                </tbody>
            </table>

            <Routes>

                <Route path="detail/:id" element={<Detail />} />
            </Routes>

        </div>
    )
}
