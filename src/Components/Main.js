import axios from "axios";
import { useState } from "react";
import Card from "./Card";

// npm install @fontawesome/fontawesome-free
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=()=>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCICode3u1ddFVhuscO_RJVVA_Yxx7-ROM'+'&maxResults=40')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
        
    }
    const handleSearch = (evt) => {
        if (evt.key === "Enter") {
          searchBook();
        }
      };
    
      const handleButtonClick = () => {
        searchBook();
      };
    return(
        <>
        <div className="header">
            <div className="row1">
                <h1>Books are a uniquely <br/> portable magic. </h1>
            </div>
            <div className="row2">
                {/* <h2>Books are a uniquely portable magic.</h2> */}
                <h2>Find Your Book</h2>
                <div className="search">
                    <input type="text" placeholder="Search Your Book"
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyUp={handleSearch}/>
                    <button onClick={handleButtonClick}>search</button>
                </div>
                <img src="./images/Books8.avif" alt="Books" ></img>
            </div>
        </div>
        <div className="container">
            {
                <Card book={bookData}/>
            }
            

        </div>
        </>
    )
}
export default Main;