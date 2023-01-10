import { Link } from "react-router-dom";
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminnavbar">
            <div className="navbar-admin">
                <div className="admin-nav-logo">
                    <img height='80px' width='80px' src="https://www.paatham.in/assets/images/img/lib.png" alt="" />
                    <h1>Admin Portal</h1>
                </div> 
                <div className="navbar-list">
                    <ul>
                        <li><Link to='/admin/'>DASHBOARD</Link></li>
                        <li><Link to='/admin/add-book'>ADD BOOKS</Link></li>
                        <li><Link to='/admin/add-user'>ADD USERS</Link></li>
                        <li><Link to='/admin/book-list'>BOOK LIST</Link></li>
                        <li><Link to='/admin/user-list'>USER LIST</Link></li>
                        <li><Link to='/'>LOG OUT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default AdminNavbar;