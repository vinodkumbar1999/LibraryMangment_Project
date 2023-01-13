import { Routes,Route } from "react-router-dom";
import BookList from "./bookList";
import ReadMoreBook from "./readMoreBook";
import UserDashboard from "./userdashboaard";
import UserNavbar from "./userNavbar";
const UserHome = () => {
    return ( 
        <div className="userhome">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>} />
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/book-list/:id" element={<ReadMoreBook/>}/>
            </Routes>
        </div>
     );
}
 
export default UserHome;