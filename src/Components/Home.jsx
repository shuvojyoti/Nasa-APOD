import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css";


export default function Home() {
    return (
        <div className="home">
           <button className="button"><Link className="flexItem" to="/nasaphoto">See into stars</Link></button>
        </div>
    )
}
