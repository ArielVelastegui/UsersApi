import axios from "axios"
import { useEffect, useState } from "react"



const useCrud = () => {
    const [users, setUsers] = useState()

    const getAllUsers = () => {
        const Url = 'http://users-crud.academlo.tech/users/'
        axios.get(Url)
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
      }
    
      const createNewUser = data => {
    
        const Url = 'http://users-crud.academlo.tech/users/'
        axios.post(Url,data)
        .then(res=>{console.log(res.data)
        getAllUsers()
        })
        .catch(err=>console.log(err))
      }
    
      const deleteUserbyId = (id)=>{
        const Url = `http://users-crud.academlo.tech/users/${id}/`
        axios.delete(Url)
        .then(res=>{console.log(res.data)
        getAllUsers()
        })
        .catch(err=>console.log(err))
      }
    
      const updateUserbyId = (id,data) => {
        const Url = `http://users-crud.academlo.tech/users/${id}/`
        axios.put(Url,data)
        .then(res=>{getAllUsers()})
        .catch(err=>console.log(err))
      }
    
      
    return (users,
        createNewUser,
        getAllUsers,
        deleteUserbyId,
        updateUserbyId)
}

export default useCrud