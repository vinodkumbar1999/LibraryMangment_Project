import { Routes,Route } from "react-router-dom";
import AdminDashBoard from "./admindashboard";
import BookList from "./bookList";
import ReadMoreBook from "./readMoreBook";
import UserNavbar from "./userNavbar";
const UserHome = () => {
    return ( 
        <div className="userhome">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashBoard/>} />
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/book-list/:id" element={<ReadMoreBook/>}/>
            </Routes>
        </div>
     );
}
 
export default UserHome;