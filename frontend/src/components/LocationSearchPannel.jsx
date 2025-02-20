import React from 'react'

const LocationSearchPannel = () => {

    // Locations
    const locations = [
        "24B , Near Kappor's cafe, Sheryians Coding School,Bhopal",
        "22B , Near Monoratra's cafe, Sheryians Coding School,Bhopal",
        "20B , Near chinmay's cafe, Sheryians Coding School,Bhopal",
        "18B , Near sharma's cafe, Sheryians Coding School,Bhopal"
    ]

    return (
        <div>
            {/* This Some Sample Data */}

            {
                locations.map((loc) => {
                    return (
                        <div key={loc} className=' rounded-xl border-2 p-3 flex gap-5 items-center justify-start border-white active:border-black '>
                            <h2 className=' bg-[#eee] flex items-center justify-center h-10 w-15 rounded-full'>
                                <i className="ri-map-pin-fill"></i>
                            </h2>
                            <h4 className=' font-medium'>{loc}</h4>
                        </div>
                    )
                })
            }

         
        </div>
    )
}

export default LocationSearchPannel