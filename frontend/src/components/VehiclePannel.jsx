import React from 'react'

const VehiclePannel = (props) => {
  return (
    <div>
        <h5 onClick={() => props.setVehiclePannel(false)} className=' p-3 mb-2 text-center w-[93%] absolute top-0'>
          <i className="ri-arrow-down-s-line text-3xl"></i>
        </h5>
        <div className=' w-full border-2 border-white active:border-black mb-2 p-5  rounded-xl flex items-center justify-between '>
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
  )
}

export default VehiclePannel