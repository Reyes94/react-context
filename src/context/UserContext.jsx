import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {

    const [photos, setPhotos] = useState([])
    const [error, setError] = useState()                   //Para manejar errores del fetch

    return (
        <UserContext.Provider value={{ photos, setPhotos, error, setError }}>
            {children}
        </UserContext.Provider>
    )
}
