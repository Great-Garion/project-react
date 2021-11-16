import { createContext, useEffect, useState } from "react"
export let UserContext = createContext()
function UserProvider(props){
    let[isLogin,setIsLogin]=useState(false)
    useEffect(()=>{
        let dataLogin= localStorage.getItem("isLogin")
        let persData=JSON.parse(dataLogin)
        setIsLogin(persData)
    },[])
    return(

        <UserContext.Provider value={{isLogin,setIsLogin}}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserProvider