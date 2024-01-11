/* eslint-disable react/destructuring-assignment */
import { createContext, useEffect, useState } from 'react'
export const storeData = createContext();
function Storage({ children }) {
    const [data, setData] = useState([]);
    const fetchfun = async () => {
        const res = await fetch("https://udemyclone-backend.onrender.com/data/fetchalldata");
        const user = await res.json();
        setData(user);
    }
    useEffect(() => {
        fetchfun();
    }, [])
    return (
        <div>
            <storeData.Provider value={[data, setData]}>
                {children}
            </storeData.Provider>
        </div>
    )
}

export default Storage