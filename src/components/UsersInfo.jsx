import React from "react";

const UsersInfo = ({ user, deleteUserbyId, setUpdateInfo,setOpenForm }) => {

  const handleEdit = ()=>{
    setUpdateInfo(user)
  }

  return (
    <section className="users">
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <ul className="data">
        <li>
          <span className="subtitle">Email:</span>
          <br /> {user.email}
        </li>
        
        <li>
          <span className="subtitle">Birthday:</span>
          <br /> {user.birthday}
        </li>
      </ul>
      <span className="action_container">

      <button className="action-btn" onClick={() => deleteUserbyId(user.id)}><i class="fa-solid fa-trash"></i></button>
      <button className="action-btn"  onClick={()=>{
        handleEdit()
        setOpenForm(true)}}> <i class="fa-solid fa-pen-to-square"></i> </button>
        </span>

    </section>
  );
};

export default UsersInfo;
