import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext'; // Import the useAuth hook
import Map from '../../components/Map/Map';
import { FiLogOut } from "react-icons/fi";
import { TbSettings } from "react-icons/tb";
import './HomePage.css';

// Import all ten images
import image1 from '/1_Extremely_Sad.png';
import image2 from '/2_Very_Sad.png';
import image3 from '/3_Angry.png';
import image4 from '/4_sad.png';
import image5 from '/5_Disappointed.png';
import image6 from '/6_neutral-gomi.png';
import image7 from '/7_Quite_Happy.png';
import image8 from '/8_Happy.png';
import image9 from '/9_Really_Happy.png';
import image10 from '/10_Extremely_Happy.png';

function HomePage() {
  const { isUserLoggedIn, user } = useAuth(); // Access the login state and user object
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [isUserLoggedIn, navigate]);

  // Array of images
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

  // Determine the image index based on gg_fullness
  const fullness = user?.gg_fullness || 0; // Default to 0 if gg_fullness is undefined
  const imageIndex = Math.min(Math.floor(fullness / 10), 9); // Ensure the index is between 0 and 9
  const selectedImage = images[imageIndex]; // Get the corresponding image

  return (
    <div className='homepage-container'>
      <nav className="navigation">
        <Link to="/login" className='page-link'>
          <FiLogOut className='icon' />
        </Link>
        <h1 className="title">GomiGotchi</h1>
        <Link to="/settings" className='page-link'>
          <TbSettings className='icon' />
        </Link>
      </nav>
      <main className="main">
        <section className='gomi-section'>
          <img src={selectedImage} alt="Gomi" className='gomi' />
          <div className="hunger-bar-container">
            <div className="hunger-bar" style={{ width: `${fullness}%` }}>
              <p>{fullness}%</p>
            </div>
          </div>
        </section>
        <Map />
      </main>
    </div>
  );
}

export default HomePage;