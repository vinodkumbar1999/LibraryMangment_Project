import '../styles/adminDashBoard.css'

const AdminDashBoard = () => {
    return (
        <div className="adminDashBoard">
            <div className="section">
                <div className="section1">
                <div className="image"><img src="" alt="" /></div>
                <div className="detail">
                    <h2 style={{color:"gray"}}>At the Library this January …</h2>
                    <h3>By Erika Berlin on December 29, 2022</h3>
                    <p style={{fontSize:'21px'}}>Greenwich Library has a full schedule of (free!) enrichment events throughout January. Speak with a librarian or check the online…</p>
                <h6>Take a Look</h6>
                </div>
                </div>
                <div className="section2">
                <div className="image"><img src="" alt="" /></div>
                     
                <div className="detail">
                    <h2 style={{color:"gray"}}>Friends Friday Films Announces Its Winter Screenings</h2>
                    <h3>By Erika Berlin on December 29, 2022</h3>
                    <p style={{fontSize:'21px'}}>Greenwich Library’s longest-running program—the Friends Friday Films series—is back with a full slate of movies, beginning on January 6. The…</p>
                <h6>Take a Look</h6>
                </div>
                </div>
                <div className="section3">
                <div className="image"><img src="" alt="" /></div>
                <div className="detail">
                    <h2 style={{color:"gray"}}>Signature Series: “The Palace Papers” Author Tina Brown</h2>
                    <h3>By Erika Berlin on December 29, 2022</h3>
                    <p style={{fontSize:'21px'}}>Greenwich Library’s Signature Series will welcome journalist, author, and former New Yorker and Vanity Fair editor in chief Tina Brown… </p>
                 <h6>Take a Look</h6>
                </div>
                </div>
            </div>

        </div>
    );
}

export default AdminDashBoard;