import React, {useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'



const FormUser = ({createNewUser,updateInfo,updateUserbyId,setUpdateInfo,setOpenForm}) => {

    const {register, reset, handleSubmit} = useForm()
    const [hackPass, setHackPass] = useState(true)

    useEffect(() => {
      reset(updateInfo)
    }, [updateInfo])
    

    const submit = data => {
        if (updateInfo){
            updateUserbyId(updateInfo.id, data)
            setUpdateInfo()
        }else{
            createNewUser(data)
        }
        setOpenForm(false)
        reset({
            first_name:'',
            last_name:'',
            password:'',
            birthday:'',
            email:''
        })
        
    }
    const changePass = () => {
        setHackPass(!hackPass)
    }
  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <span onClick={()=>{setOpenForm(false)
        setUpdateInfo()
        reset({
            first_name:'',
            last_name:'',
            password:'',
            birthday:'',
            email:''
        })
        }} className='btn_close'>X</span>
        <h2 className='form_name'>{updateInfo?'Update user':'Create a new user'}</h2>
        <div className='form_div'>
            <label className='form_label' htmlFor="first_name">First Name</label>
            <input className='form_input' type="text" {...register('first_name')} />
        </div>
        <div className='form_div'>
            <label className='form_label'  htmlFor="last_name">Last Name</label>
            <input className='form_input' type="text" {...register('last_name')}/>
        </div>
        <div className='form_div'>
            <label className='form_label'  htmlFor="email">Email</label>
            <input className='form_input' type="text" {...register('email')}/>
        </div>
        <div className='form_div'>

            <label className='form_label'  htmlFor="password">Password</label>
            <span className='pass'>
            <input className='form_input' type={hackPass?"password":'text'} {...register('password')}/>
            <span className='btn' onClick={changePass}>{hackPass?'Show':'Hide'} </span>
                
            </span>
                
        </div>
        <div className='form_div'>
            <label className='form_label'  htmlFor="birthday">Birthday</label>
            <input className='form_input' type="date" {...register('birthday')}/>
        </div>
        <button>Submit</button>
    </form>
  )
}

export default FormUser