import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserdataContext } from '../context/ContextUser'
import axios from 'axios';
const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {user, setUser } = useContext(UserdataContext)

    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password,
        }

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

        if (res.status === 200) {
            const data = res.data;
            setUser(data.user);
            localStorage.setItem('token',data.token)
            navigate('/home')
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

                    <p className=' text-center'>New here?<Link to={'/signup'} className=' mb-3 text-blue-600'>Create an Account</Link></p>
                </form>
            </div>

            <div>
                <Link to={'/captain-login'} className=' flex items-center justify-center bg-[#10b461] text-white font-semibold mb-7 rounded px-4  py-2 w-full text-lg placeholder:text-base' >Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin