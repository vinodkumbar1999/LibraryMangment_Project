import { Link } from "react-router-dom";
import '../styles/ladingPage.css'

const LandlingPage = () => {
    return (
        <div className="landlingpage">
            <div className="selectLoginMainType">
                <div className="selectLoginType">
                    <h1>Library management System</h1>
                    <div className="logs">
                        <div className="adminlog">
                            <img src="images/adminlogo.png" alt="" /> <br />
                            <button ><Link to='/admin-login'>Admin</Link></button>
                        </div>
                        <div className="userlog">
                            <img src="images/userlogo.png" alt="" /> <br />
                            <button ><Link to='/user-login'>User</Link></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LandlingPage;