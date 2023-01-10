import { useState,useEffect } from "react";
import '../styles/bookList.css'
import { useNavigate } from "react-router-dom";

const BookList = () => {
    let [book, setbook] = useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response = await fetch("http://localhost:10/books");
            let data = await response.json();
            setbook(data)

        }
        fetchData()
    },[book])

    let handelDelete=(id, title)=>{
        fetch(`http://localhost:10/books/${id}`,{
            method:'DELETE'
        });
        alert(`${title} has been deleted Permently.`)
    }
    let handeldisplybook=(id)=>{
        nav(`/admin/book-list/${id}`)
    }

    let nav=useNavigate()
    return ( 
        <div className="booklist">
            <h1>BOOK LIST:{book.length}</h1>
            <div className="book_section">
                {
                    book.map((data)=>(
                        <div className="book">
                            <div className="image">
                                <img style={{height:'180px',width:"168"}} src={data.thumbnailUrl} alt="Image is not Found." />
                            </div>
                            <div className="detail">
                            <h2>Title: {data.title}</h2>
                            <p> <b>Authors: </b>{data.authors}</p>
                            <p> <b> Category: </b>{data.categories}</p> <p><b>Page Count:</b>{data.pageCount}</p>
                            <button onClick={()=>handelDelete(data.id, data.title)}>Delete</button>
                            <button onClick={()=>handeldisplybook(data.id)}>Read More</button>
                            </div>
                        </div>
                        
                    ))
                }
            </div>

        </div>
     );
}
 
export default BookList;