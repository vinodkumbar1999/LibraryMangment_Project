import '../styles/addbook.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    let [title, settitle] = useState("")
    let [authors, setauthor] = useState("")
    let [categories, setcategories] = useState("")
    let [pageCount, setpagecount] = useState("")
    let [shortDescription, setshortDescription] = useState("")
    let [longDescription, setlongDescription] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")
    let nav=useNavigate();

    let handelsubmit = (e) => {
        e.preventDefault();
        let data ={title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl}
        fetch('http://localhost:10/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('Book added sucussfully')
        nav('/admin/book-list')

    }

    return (
        <div className="addbook">
            <div className="addbookall">
                <h1> <u>ADD A BOOK</u> </h1>
                <div className="formContainer">
                    <form onSubmit={handelsubmit}>
                        <div className='title'>
                            <label htmlFor="">Title:</label><br />
                            <input type="text" placeholder='Title of the Book' required value={title} onChange={(e) => settitle(e.target.value)} />
                        </div>
                        <div className='authors'>
                            <label htmlFor="">Authors:</label><br />
                            <input type="text" placeholder='Author of the Book' required value={authors} onChange={(e) => setauthor(e.target.value)} />
                        </div>
                        <div className='categories'>
                            <label htmlFor="">Categories:</label><br />
                            <input type="text" placeholder='Categories of the Book' required value={categories} onChange={(e) => setcategories(e.target.value)} />
                        </div>
                        <div className='pageCount'>
                            <label htmlFor="">Page Count:</label><br />
                            <input type="number" placeholder='Pagecount of the Book' required value={pageCount} onChange={(e) => setpagecount(e.target.value)} />
                        </div>
                        <div className='shortDescription'>
                            <label htmlFor="">Short Description:</label><br />
                            <textarea name="" id="" cols="59" rows="10" placeholder='Enter Short Description' required value={shortDescription} onChange={(e) => setshortDescription(e.target.value)}></textarea>
                        </div>
                        <div className='longDescription'>
                            <label htmlFor="">Long Description:</label><br />
                            <textarea name="" id="" cols="59" rows="10" placeholder='Enter Long Description' required value={longDescription} onChange={(e) => setlongDescription(e.target.value)}></textarea>
                        </div>
                        <div className='thumbnailUrl'>
                            <label htmlFor="">Upload Image:</label><br />
                            <input type="text" name="" id="" placeholder='Enter URL' required value={thumbnailUrl} onChange={(e) => setthumbnailUrl(e.target.value)} />
                        </div>
                        <button>Add Book</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default AddBook;