import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { CapatainDataContext } from '../context/CapatainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CapatainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

    if (response.status === 201) {
      const data = response.data;
      console.log(data)
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home')
    }


    setEmail("");
    setPassword("");
  }
  return (
    <div className=' p-7 flex flex-col justify-between h-screen '>
      <div>
        <img className='w-16 mb-5' src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png' />
        <form onSubmit={submitHandler}>
          <h3 className=' text-lg mb-2'>What's your email</h3>
          <input
            className=' bg-[#eeeeee] mb-7 rounded px-4 border py-2 w-full text-lg placeholder:text-base'
            type='email'
            required
            placeholder='enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className=' text-lg mb-2'>Enter Password</h3>
          <input
            className=' bg-[#eeeeee] mb-7 rounded px-4 border py-2 w-full text-lg placeholder:text-base'
            type='password'
            required
            placeholder=' password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
          <button className=' bg-[#111] text-white font-semibold mb-7 rounded px-4  py-2 w-full text-lg placeholder:text-base'>Login</button>

          <p className=' text-center'>New here?<Link to={'/captain-signup'} className=' mb-3 text-blue-600'>Register as a Captain</Link></p>
        </form>
      </div>

      <div>
        <Link to={'/login'} className=' flex items-center justify-center bg-[#d5622d] text-white font-semibold mb-7 rounded px-4  py-2 w-full text-lg placeholder:text-base' >Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin