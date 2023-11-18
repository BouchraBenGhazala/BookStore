
// import { Axios } from "axios";

import { useState } from "react";
import Card from "./Card";

// npm install @fontawesome/fontawesome-free
const Main=()=>{
    const [search,setSearch]=useState("");
    const searchBook=(evt)=>{
        if(evt.key==="Enter"){
            console.log("hello");
        }
    }
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
                    onKeyUp={searchBook}/>
                    <button>search</button>
                </div>
                <img src="./images/Books8.avif" alt="Books" ></img>
            </div>
        </div>
        <div className="container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </>
    )
}
export default Main;