import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function EditUser() {

    let navigate=useNavigate()

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const{name,username,email}=user;

    const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    }

  return (
    <div>
      <h1 className="container shadow justify-center text-[50px]">
        Register User
      </h1>
      <div className="justify-center pt-20 pr-20">
        <form  onSubmit={(e)=>onSubmit(e)}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                 Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500"
                id="inline-full-name"
                type={"text"}
                placeholder="Zack Snyder"
                name="name"
                value={name}
                onChange={(e)=>onInputChange(e)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Username
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500"
                id="inline-password"
                type={"text"}
                placeholder="Zack"
                name="username"
                value={username}
                onChange={(e)=>onInputChange(e)}

              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500"
                id="inline-password"
                type={"text"}
                placeholder="zacksnyder@gmail.com"
                name="email"
                value={email}
                onChange={(e)=>onInputChange(e)}

              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 mx-8 rounded"
               type="submit"
              >
                Edit User
              </button>
              <Link
                className="shadow-lg bg-outline hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded"
                to="/"
              >
                Cancle
              </Link>
            </div>
          </div>
        </form>
      </div>
      </div>
  );
}
