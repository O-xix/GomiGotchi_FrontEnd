import { Link } from 'react-router-dom';
import Map from './Map';
import './HomePage.css'; // Import the CSS file for styling

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/litter/1">View Litter 123</Link>
      <br />
        <Link to="/add/1">Add Litter</Link>
        <Map />
    </div>
  );
}

export default HomePage;