import React, { createContext, useContext, useState } from 'react'

export const CapatainDataContext = createContext();

// export const useCaptain = () => {
//     const context = useContext({ CapatainContext });
//     if (!context) {
//         throw new Error('UserCaptain must be used with in acaptainProvider ')
//     };
//     return context;
// };

const CapatainContext = ({children}) => {


    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captaindata) => {
        setCaptain(captaindata);
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
    }

    return (
        <CapatainDataContext.Provider value={value}>
            {children}
        </CapatainDataContext.Provider>
    )
}

export default CapatainContext;




