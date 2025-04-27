import React from 'react';
import { useParams } from 'react-router-dom';
import { FaLocationDot, FaPersonWalking } from "react-icons/fa6";
import trashImage from '../../assets/images/trash.jpg'
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline as BackArrow } from "react-icons/io5";

import './LitterInfoPage.css'; // Import the CSS file for styling

function LitterInfoPage() {
  const { id } = useParams(); // Extract the 'id' from the URL

  const caption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
  const image = trashImage;

  return (
    <div className = "pageContainer">
      <section className= 'imageSection'>
        <figure className = "imageContainer">
          <img className = "litterImage" src = {trashImage}/>
        </figure>
        <figcaption className = "address"><FaLocationDot/>North 36th Street, Troll Ave N</figcaption>
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
          <Link to={'/litter-pick-up' + id} className='pick-up-link'>Pick up!</Link>
          <div className='distanceCaption'>
            <FaPersonWalking/>
            <p>73 yards</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LitterInfoPage;