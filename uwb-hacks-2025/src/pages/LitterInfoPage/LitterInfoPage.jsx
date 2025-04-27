import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { FaPersonWalking } from "react-icons/fa6";
import trashImage from '../../assets/images/trash.jpg'
import { Link } from 'react-router-dom';
import { getDistance } from 'geolib'
import { IoArrowBackCircleOutline as BackArrow } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";


import './LitterInfoPage.css'; // Import the CSS file for styling

function LitterInfoPage() {
  const { id } = useParams(); // Extract the 'id' from the URL

  const [caption, setCaption] = useState(null);
  const [image, setImage] = useState(null);
  const [litterCoords, setLitterCoords] = useState();
  const [distance, setDistance] = useState("...");
  const [time, setTime] = useState();
  const [isClose, setIsClose] = useState(false);

  setInterval(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setDistance(getDistance({latitude, longitude}, {latitude: litterCoords.latitude, longitude: litterCoords.longitude}));
          setIsClose(distance < 10);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, 3000)
  
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/litter/litter/${id}`, {
        method: 'GET',
        headers: {
          "Context-Type": "application/json"
        }
    }).then(res => res.json()).then(json => {
      console.log(json);
      setImage("data:image/jpeg;base64," + json.before_image);
      setCaption(json.caption)
      setLitterCoords({latitude: json.latitude, longitude: json.longitude});
      const readableTime = new Date(json.created_time).toLocaleString();
      setTime(readableTime);
    });
  }, [])

  return (
    <div className = "pageContainer">
      <section className= 'imageSection'>
        <figure className = "imageContainer">
          <img className = "litterImage" src = {image}/>
        </figure>
        <figcaption className = "address"><SlCalender/>{time}</figcaption>
        <Link to = "/" className = "backArrow">
          <BackArrow className = "backArrowIcon" />
        </Link>
      </section>
      <section className = 'infoSection'>
        <article className = "description">
          <div className = "titleContainer">
            <h1>Description</h1>
          </div>
          <p className = "caption">{caption}</p>
        </article>
        <div className='pick-up-button'>
          <Link to={isClose ? '/litter-pick-up/' + id : ''} className={'pick-up-link ' + isClose}>Pick up!</Link>
          <div className='distanceCaption'>
            <FaPersonWalking/>
            <p>{distance} meters</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LitterInfoPage;