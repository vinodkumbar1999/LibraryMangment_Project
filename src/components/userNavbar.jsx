import { Link } from "react-router-dom";
import '../styles/userNavbar.css'
const UserNavbar = () => {
    return ( 
        <div className="usernavbar">
        <div className="navbar-user">
            <div className="user-nav-logo">
                <img height='80px' width='80px' src="https://www.paatham.in/assets/images/img/lib.png" alt="" />
                <h1>User Portal</h1>
            </div> 
            <div className="navbar-list">
                <ul>
                    <li><Link to='/user/'>DASHBOARD</Link></li>
                    <li><Link to="/user/book-list">BOOK LIST</Link></li>
                    <li id="logout"><Link to='/'>LOG OUT</Link></li>
                </ul>
            </div>
        </div>
    </div>
     );
}
 
export default UserNavbar;