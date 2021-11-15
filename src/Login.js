import { useState } from "react"

function Login(){
    let [user,setUser]= useState({
        username:"",
        password:"",
    })

let handleUser =(e)=>{
    let{name,value} = e.target
    setUser({
        ...user,
        [name]:value,
    })
}
console.log (user)
    let [dataUser,setDataUser]=useState([])
    let handleLogin =(e)=>{
        e.preventDefsult(S)
    }
    useEffect(()=>{
        fetch("https://618e643350e24d0017ce1267.mockapi.io/user")
        .then((resp)=> resp.json())
        .then((data)=>setDataUser(data))
        console.log(dataUser)
    },[])
    localStorage.setItem("Login",dataUser)
    return(
        <div>ini login</div>
    )

}
export default Login