import '../styles/readmorebook.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ReadMoreBook = () => {
    let [book, setbook] = useState([])
    // to get route parameter
    let params = useParams()
    useEffect(() => {
        let fecthdata = async () => {
            let response = await fetch(`http://localhost:10/books/${params.id}`)
            let data = await response.json()
            setbook(data)
        }
        fecthdata()

    })




    return (
        <div className="readmorebook">
            <div className="readmorebookcontainer">
            <h2><u>{book.title}</u></h2>
            <p>{book.longDescription}</p>
            </div>
        </div>


    );
}

export default ReadMoreBook;