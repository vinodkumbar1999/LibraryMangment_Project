import { useState, useEffect } from "react";
import '../styles/userList.css'

const UserList = () => {
    let [user, setuser] = useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let response= await fetch("http://localhost:10/users")
            let data= await response.json();
            setuser(data)
        }
        fetchdata()
    },[user])
    
    let handeldalete=(id, name)=>{
        fetch(`http://localhost:10/users/${id}`,{
            method:'DELETE'
        });
        alert(`${name} has been deleted Permently.`)
    }
    return ( 
        <div className="userlist">
            <h1>USER LIST: {user.length}</h1>
            <div className="usersection">
            {
                user.map(data=>(
                    <div className="user">
                        <h4>User: {data.name}</h4>
                        <h4>Age: {data.age}</h4>
                        <h4>Email ID: {data.email}</h4>
                        <h4>Phone Number: {data.phoneNo}</h4>
                        <button onClick={()=>handeldalete(data.id, data.name)}>Delete</button>
                    </div>
                ))
            }
        </div>
        </div>
     );
}
 
export default UserList;