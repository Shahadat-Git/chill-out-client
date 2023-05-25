import React, { createContext, useEffect, useState } from 'react';

export const ChefsContext = createContext(null);

const ChefsProvider = ({ children }) => {
    const [chefs, setChefs] = useState(null);

    useEffect(() => {
        fetch(`https://chill-out-server.vercel.app/chefs-info`)
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    const chefsInfo = {
        chefs,
    }
    return (
        <ChefsContext.Provider value={chefsInfo}>
            {children}
        </ChefsContext.Provider>
    );
};

export default ChefsProvider;