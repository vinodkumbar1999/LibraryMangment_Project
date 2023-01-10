import '../styles/Adduser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    let [name, setname]=useState("")
    let [age, setage]=useState("")
    let [email, setemail]=useState("")
    let [phoneNo, setphoneNo]=useState("")
    let nav=useNavigate();


    let handelsubmit=(e)=>{
        e.preventDefault();
        let data ={name, age, email, phoneNo}
        fetch('http://localhost:10/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('User added sucussfully')
        nav('/admin/user-list')

    }
    return (
        <div className="adduser">
            <div className="addusercontainer">
                <h1> <u>ADD A USER</u> </h1>
                <div className="adduserform">
                    <form onSubmit={handelsubmit}>
                        <div className="formname">
                            <label htmlFor="">Full Name:</label><br />
                            <input type="text" placeholder='Enter Full Name' required value={name} onChange={(e)=>setname(e.target.value)}/>
                        </div>
                        <div className="formage">
                            <label htmlFor="">Age:</label><br />
                            <input type="text" placeholder='Enter Age' required value={age} onChange={(e)=>setage(e.target.value)}/>
                        </div>
                        <div className="formemail">
                            <label htmlFor="">Email id:</label> <br />
                            <input type="email" placeholder='Enter Email' required value={email} onChange={(e)=>setemail(e.target.value)}/>
                        </div>
                        <div className="formphone">
                            <label htmlFor="">Contact Number:</label><br />
                            <input type="tel" placeholder='Enter Contact Number' maxLength='10' minLength='10' required value={phoneNo} onChange={(e)=>setphoneNo(e.target.value)}/>
                        </div>
                        <button>Add User</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default AddUser;