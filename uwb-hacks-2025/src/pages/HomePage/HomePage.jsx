import { Link } from 'react-router-dom';
import Map from '../../components/Map/Map';
import { FiLogOut } from "react-icons/fi";
import { TbSettings } from "react-icons/tb";
import gomi from '../../assets/gomi-sprites/happy-gomi.png'
import './HomePage.css'; // Import the CSS file for styling

function HomePage() {
  return (
    <div className='homepage-container'>
      <nav>
        <Link to = "/login" className='page-link'>
          <FiLogOut className='icon'/>
        </Link>
        <h1>GomiGachi</h1>
        <Link to = "/settings" className='page-link'>
          <TbSettings className='icon'/>
        </Link>
      </nav>
      <main>
        <section className='gomi-section'>
            <img src = {gomi} alt = "Gomi" className='gomi'/>
            <div className = "hunger-bar-container">
              <div className="hunger-bar" style={{width:"50%"}}><p>50%</p></div>
            </div>
        </section>
        <Map />
      </main>
    </div>
  );
}

export default HomePage;