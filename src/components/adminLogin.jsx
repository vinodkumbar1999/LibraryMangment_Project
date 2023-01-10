import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css';
const AdminLogin = () => {
    let [email, updateemail] = useState("")
    let [password, updatepassword] = useState("")
    let nav = useNavigate()
    let login = (e) => {
        e.preventDefault();
        let data = { email, password }
        if (email == "admin@gmail.com" && password == 1234) {
            nav('/admin/')
        }
        else {
            alert('Invalide credentials')
        }

    }

    return (
        <div className="adminlogin">
            <div className="adminform_container">
                <h1>Login Admin</h1>
                <div className="adminform_input">
                    <form onSubmit={login}>
                        <div className="email">
                            <input type="email" placeholder="Email Address" required value={email} onChange={(e) => updateemail(e.target.value)} />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="Password" required value={password} onChange={(e) => updatepassword(e.target.value)} />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default AdminLogin;