import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel';

const Home = () => {
  const [pickup, setPickUp] = useState('');
  const [destination, setDestination] = useState('');
  const [pannelOpen, setPannelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelClose = useRef(null)
  const submtiHandler = async (e) => {
    e.preventDefault();

  }

  useGSAP(function () {
    if (pannelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity:1,
        padding:20
      })
      gsap.to(panelClose.current,{
        opacity:1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity:0,
        padding:0
      })
      gsap.to(panelClose.current,{
        opacity:0
      })
    }
  }, [pannelOpen])
  return (
    <div className=' h-screen relative overflow-hidden'>
      <img className='w-17  absolute left-5 top-5' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' />

      <div className=' h-screen w-screen'>
        <img className=' h-full w-full object-cover' src='https://i.redd.it/nb3qsq3k8vg81.jpg' alt='' />
      </div>

      <div className='  flex flex-col justify-end absolute h-screen top-0 w-full '>
        <div className=' h-[30] bg-white p-5'>
          <h5 ref={panelClose} onClick={() => { setPannelOpen(false) }} className=' opacity-0 absolute right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className=' text-2xl font-semibold'>Ftnd aTrip</h4>
          <form className='' onSubmit={(e) => submtiHandler(e)}>
            <input onClick={() => { setPannelOpen(true) }} onChange={(e) => setPickUp(e.target.value)} value={pickup} className=' bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type='text' placeholder='Add a Pick up location' />
            <input onClick={() => { setPannelOpen(true) }} onChange={(e) => setDestination(e.target.value)} value={destination} className=' bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type='text' placeholder='Enter your Destination' />
          </form>
        </div>
        <div ref={panelRef} className='  bg-white h-0'>
          <LocationSearchPannel />
        </div>
      </div>


      <div className=' fixed z-10 bottom-0 px-3 py-8 translate-y-full bg-white w-full'>
        <div className=' w-full border-2 border-white active:border-black mb-2 p-5   rounded-xl flex items-center justify-between '>
          <img className=' h-15 p-2' src='./download (1).jpeg' />
          <div className='  w-1/2'>
            <h4 className=' font-medium text-base'>UberGo<span><i className="ri-user-fill"></i>4</span>
             </h4>
             <h5 className=' font-medium text-sm'>2 min away</h5>
             <p className=' font-normal text-xs text-gray-600'>Affordable compact rides</p>
          </div>
          <h2 className=' text-lg font-semibold pr-1'>193.0</h2>
        </div>

        <div className=' w-full border-2 mb-2 p-5  border-white active:border-black rounded-xl flex items-center justify-between '>
          <img className=' h-15 p-2' src='./Bike.jpeg' />
          <div className='  w-1/2'>
            <h4 className=' font-medium text-base'>Moto<span><i className="ri-user-fill"></i>1</span>
             </h4>
             <h5 className=' font-medium text-sm'>3 min away</h5>
             <p className=' font-normal text-xs text-gray-600'>Affordable motor rides</p>
          </div>
          <h2 className=' text-lg font-semibold pr-1'>65.20</h2>
        </div>

        <div className=' w-full border-2 mb-2 p-5  border-white active:border-black rounded-xl flex items-center justify-between '>
          <img className=' h-15 p-2' src='./Auto.jpeg' />
          <div className='  w-1/2'>
            <h4 className=' font-medium text-base'>Auto<span><i className="ri-user-fill"></i>3</span>
             </h4>
             <h5 className=' font-medium text-sm'>3 min away</h5>
             <p className=' font-normal text-xs text-gray-600'>Affordable auto rides</p>
          </div>
          <h2 className=' text-lg font-semibold pr-1'>105.20</h2>
        </div>
      </div>

    </div>
  )
}

export default Home