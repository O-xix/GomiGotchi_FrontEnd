import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { FaLocationDot, FaPersonWalking } from "react-icons/fa6";
import trashImage from '../../assets/images/trash.jpg'
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline as BackArrow } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";


import './PickUpLitterPage.css'; // Import the CSS file for styling


function PickUpLitterPage() {
  const { id } = useParams(); // Extract the 'id' from the URL

  const caption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
  const [selectedImage, setSelectedImage] = useState(null);// trashImage;

  function handleImageUpload(e) {
    setSelectedImage(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className = "pageContainer">
      {selectedImage ? (<section className= 'imageSection'>
        <figure className = "imageContainer">
          <img className = "litterImage" src = {selectedImage}/>
        </figure>
        <figcaption className = "address"><FaLocationDot/>North 36th Street, Troll Ave N</figcaption>
        <Link to = "/" className = "backArrow">
          <BackArrow className = "backArrowIcon" />
        </Link>
      </section>
      ) : (<section className='addImageSection'>
        <div className = "addImageButton">
          <FaCamera className = "cameraIcon"/>
          <h2>Add a picture</h2>
        </div>
        <input type = "file" className='photoInput' onChange={handleImageUpload}/>
        <Link to = "/" className = "imageBackArrow">
            <BackArrow className = "imageBackArrowIcon" />
        </Link>
      </section>)}
      <section className = 'infoSection'>
        <article className = "description">
          <div className = "titleContainer">
            <h1>Description</h1>
          </div>
          <p className = "caption">{caption}</p>
        </article>
        <div className='pick-up-button'>
          <Link to={'/'} className='pick-up-link'>Pick up</Link>
        </div>
      </section>
    </div>
  );
}

export default PickUpLitterPage;