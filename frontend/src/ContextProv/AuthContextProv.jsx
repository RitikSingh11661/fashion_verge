import { createContext, useState } from 'react';
export const authState = createContext()

function AuthContextProvider({children}) {
    const [loading,setLoading] = useState(false)
    const [isAuth,setAuth] = useState(false);
    const [token,setToken] = useState(null);
    
    const loginUser=(val1)=>{
        setAuth(val1)
    }
    
    const logoutUser=(val)=>{
        setAuth(val)
    }

    const handleLoading=(val2)=>{
        setLoading(val2)
    }
      
    const handleToken=(val3)=>{
        setToken(val3);
    }

    return(
        <authState.Provider value={{loginUser,isAuth,logoutUser,token,handleLoading,handleToken,loading}}>{children}</authState.Provider>
    )
}

export default AuthContextProvider;