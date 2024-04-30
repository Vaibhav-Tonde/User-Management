import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Home() {

    const [users,setUsers]=useState([])

    const {id}=useParams()

    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    }

    const deleteUser=async (id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers()
    }

  return (
    <div className="flex flex-col py-10 px-20">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
              
                {
                    users.map((user,index)=>(
                        <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium" key={index}>{index+1}</td>
                  <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                  <td className="whitespace-nowrap px-6 py-4">{user.username}</td>
                  <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Link to="/viewuser" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded">View</Link>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-4 rounded">Edit</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={()=>deleteUser(user.id)}
                    >Delete</button>  
                  </td>
                </tr>
                    ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
