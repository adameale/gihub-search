  import { useEffect, useState } from "react"
  function UserResults() {
    const [users,setUsers] =useState([])
    const [Loading,setLoading] =useState(true)
    useEffect(()=>{
        fetchUsers()
    },[])
    const fetchUsers = async ()=>{
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
        headers:{
            Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}}`
        }
        })
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }
    if(!Loading){
    return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4
    lg:grid-cols-3 md:cols-2">
        {users.map((user)=>(
            <h3>{user.login}</h3>
        ))}
    </div>
    ) 
}else{} 
} 

export default UserResults