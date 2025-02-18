import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1737278706164-fd9e04f4beef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyZWUlMjBpbWFnZXNUcmFmaWMlMjBMaWdodCUyMGNvbnRyb2wlMjB3aXRoJTIwYmclMjByZWQlMjA0MDB8ZW58MHx8MHx8fDA%3D)] h-screen w-full bg-red-400 flex justify-between flex-col pt-8  '>
            <img className='w-16 ml-8' src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png' />
            <div className=' bg-white py-4 px-4 pb-7'>
                <h2 className=' text-3xl font-bold'>Get Started with Uber</h2>
                <Link to={"/login"} className='flex items-center justify-center w-full rounded mt-4 bg-black text-white py-3
                '>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start