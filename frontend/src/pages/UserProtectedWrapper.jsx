import React, { useContext, useEffect, useState } from 'react'
import { UserdataContext } from '../context/ContextUser'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserdataContext);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [token]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
        headers:{
            Authorization:`Beare ${token}`
        }
    }).then((res) => {
        if (res.status === 200) {
            setUser(res.data.user);
            setIsLoading(false)
        }
    }).catch((err) => {
        console.log(err);
        localStorage.removeItem('token')
        navigate('/login')
    })

    if (isLoading) {
        return (
            <div>Loading....</div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper