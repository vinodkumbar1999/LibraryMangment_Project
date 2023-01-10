import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'

const UserLogin = () => {
    let nav = useNavigate();
    let login = (e) => {
        e.preventDefault();
        nav('/user/')
    }
    return (
        <div className="userlogin">
            <div className="userform_container">
                <h1>Login User</h1>
                <div className="userform_input">
                    <form onSubmit={login}>
                        <div className="email">
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <button>Login</button>
                    </form>

                </div>
            </div>

        </div>
    );
}

export default UserLogin;