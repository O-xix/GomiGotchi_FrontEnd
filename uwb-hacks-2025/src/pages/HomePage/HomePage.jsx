import { Link } from 'react-router-dom';
import Map from '../../components/Map/Map';
import './HomePage.css'; // Import the CSS file for styling

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/litter-info/1">View Litter 123</Link>
      <br />
      <Link to="/report-litter">Add Litter</Link>
      <br />
      <Link to="/settings">Settings</Link>
      <Map />
    </div>
  );
}

export default HomePage;