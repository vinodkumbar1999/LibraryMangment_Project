import { Routes,Route } from "react-router-dom";
import AdminNavbar from "./adminNavbar";
import AdminDashBoard from "./admindashboard";
import BookList from "./bookList";
import UserList from "./userList";
import ReadMoreBook from "./readMoreBook";
import AddUser from "./addUser";
import AddBook from "./addbook";

const AdminHome = () => {
    return ( 
        <div className="adminhome">
           <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminDashBoard/>}/>
                <Route path='/book-list' element={<BookList/>}/>
                <Route path='/user-list' element={<UserList/>}/>
                <Route path='/book-list/:id' element={<ReadMoreBook/>}/>
                <Route path='/add-user' element={<AddUser/>}/>
                <Route path='/add-book' element={<AddBook/>}/>
            </Routes>

        </div>
     );
}
 
export default AdminHome;