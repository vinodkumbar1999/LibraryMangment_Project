import '../styles/adminDashBoard.css'

const AdminDashBoard = () => {
    return (
        <div className="adminDashBoard">
            <div className="section">
                <div className="section1">
                <div className="image"><img src="" alt="" /></div>
                <div className="detail">
                    <h2 style={{color:"gray"}}>EXPLORE</h2>
                    <h3>E-books</h3>
                    <p>OverDrive Download thousands of eBooks directly to your device, including the hard-to-get ebook Express Collection.
            Check out up to 20 items and hold up to 15 items. Explore OverDrive</p>
                </div>
                </div>
                <div className="section2">
                <div className="image"><img src="" alt="" /></div>
                     
                <div className="detail">
                    <h2 style={{color:"gray"}}>EXPLORE</h2>
                    <h3>Digital Learning</h3>
                    <p>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of courses and video
            tutorials where you can discover, complete, and track courses related to your field and interests.</p>
                </div>
                </div>
                <div className="section3">
                <div className="image"><img src="" alt="" /></div>
                <div className="detail">
                    <h2 style={{color:"gray"}}>EXPLORE</h2>
                    <h3>Magazines</h3>
                    
                    <p>Magazines For your convenience, thusands of magazines are available now to borrow through OverDrive and Libby. This
            includes hot titles like The Economist and Bon Appetit. (Formerly available through RBdigital.) </p>
                </div>
                </div>
            </div>

        </div>
    );
}

export default AdminDashBoard;