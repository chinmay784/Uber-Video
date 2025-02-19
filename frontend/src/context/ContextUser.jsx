import React, { createContext, useState } from 'react'

export const UserdataContext = createContext()

const ContextUser = ({ children }) => {

  const [user, setUser] = useState({
    email: "",
    fullname: {
      firstname: "",
      lastname: ""
    }
  })



  return (
    <div>
      <UserdataContext.Provider value={{ user, setUser }}>
        {children}
      </UserdataContext.Provider>
    </div>
  )
}

export default ContextUser