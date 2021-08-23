import React, {useState} from 'react'
import { useEffect } from 'react';
import Navbar from  "./Nav";
import "../App.css";


export default function NasaPhoto() {

    const [photoData, setPhotoData] = useState(null);

    useEffect(()=>
    {
        fetchPhoto();
        async function fetchPhoto () {
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=i0jPtKkgTjIpygNvegSbCOlFoSsR4L3vYPzsSFHu'
            );
            const data =  await res.json();
            setPhotoData(data);
        }
    }, []);



    if (!photoData) return <div/>
    return (

        <>
        <div className="mainContainer">
          <img className="nasaPhoto" src={photoData.url} alt={photoData.title} />
          <div className="nasaDetails">
              <h1 className="nasaTitle">{photoData.title}</h1>
              <p className="nasaDate">{photoData.date}</p>
              <p className="nasaExp">{photoData.explanation}</p>
          </div>
        <Navbar/>

        </div>
        </>
    )
}
