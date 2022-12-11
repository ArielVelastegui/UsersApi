import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UsersInfo from './components/UsersInfo'

function App() {
  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [openForm, setOpenForm] = useState(false)

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

  useEffect(() => {
    getAllUsers()
  }, [])
console.log(users)
 
  return (
    <div className="App">
      <h1>Users Generator</h1>
      <button className='create' onClick={()=>{setOpenForm(true)}}>Create a User</button>
      <div className={openForm?"form_container":'form_container close_form'}>

      <FormUser createNewUser={createNewUser} updateInfo={updateInfo} updateUserbyId={updateUserbyId} setUpdateInfo={setUpdateInfo} setOpenForm={setOpenForm}/>
      </div>
      <article className='users_container'>
      {
        users?.map(
          user=>(

            <UsersInfo key={user.id} user={user} deleteUserbyId={deleteUserbyId} setUpdateInfo={setUpdateInfo} setOpenForm={setOpenForm}/>

            
            )
            )
          }
          </article>
    </div>
  )
}

export default App
