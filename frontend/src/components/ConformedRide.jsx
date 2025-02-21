import React from 'react'

const ConformedRide = (props) => {
  return (
    <>
      <div>
      <h5 onClick={() => props.setVehiclePannel(false)} className=' p-3 mb-2 text-center w-[93%] absolute top-0'>
        <i className="ri-arrow-down-s-line text-3xl"></i>
      </h5>
      <h3 className=' text-2xl font-semibold mb-5'>Confirm your Ride</h3>
      <div className=' flex gap-5 justify-between items-center flex-col'>
        <img className=' ml-6 w-[70%] h-[70%] ' src='./download (1).jpeg' />
        <div className=' w-full mt-5'>
          <div className=' flex items-center gap-5 p-3 border-b-2'>
            <i className=' text-lg ri-map-pin-2-fill'></i>
            <div>
              <h3 className=' text-lg font-medium'>562/11-A</h3>
              <p className=' text-sm -mt-1 text-gray-600'>Balasore Talab</p>
            </div>
          </div>

          <div className=' flex items-center gap-5 p-3 border-b-2'>
            <i className=' text-lg ri-map-pin-user-fill'></i>
            <div>
              <h3 className=' text-lg font-medium'>562/11-A</h3>
              <p className=' text-sm -mt-1 text-gray-600'>Balasore Talab</p>
            </div>
          </div>

          <div className=' flex items-center gap-5 p-3 '>
            <i className=' text-lg ri-currency-line'></i>
            <div>
              <h3 className=' text-lg font-medium'>193</h3>
              <p className=' text-sm -mt-1 text-gray-600'>Cash cash</p>
            </div>
          </div>
        </div>

        <button className=' mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm Ride</button>
      </div>
    </div>
    </>
  )
}

export default ConformedRide