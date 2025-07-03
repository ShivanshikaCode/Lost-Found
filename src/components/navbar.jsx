import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import './navbar.css';
import propic from '../assets/images/propic.png';
import { FaBars } from 'react-icons/fa';

    const Navbar = () => {
const[ menuOpen, setMenuopen] = useState(false)

  return (
    <>
  <div className='ham'  onClick={()=> setMenuopen(!menuOpen)}> <FaBars size={24} color="#333"/></div>
  
    <nav className={`left ${menuOpen ? 'show' : ''}`}>
      <img src={propic} alt="profile" className="proimg" />
      <h1 className="profile">Saniya Maqsood</h1>
      <ul>
        <li><Link to ="/" ><button className="btn" onClick={() => setMenuopen(false)}>Dashboard</button></Link></li>
        <li><Link to ="/report"><button className="btn"  onClick={() => setMenuopen(false)}>Report Items</button></Link></li>
        <li><Link to ="/lost"><button className="btn"  onClick={() => setMenuopen(false)}>Lost Items</button></Link></li>
        <li><Link to ="/found"><button className="btn"  onClick={() => setMenuopen(false)}>Found Items</button></Link></li>
        <li><Link to="/support"><button className="btn"  onClick={() => setMenuopen(false)}>Support</button></Link></li>
      </ul>

 </nav>
 </>
  );
};

export default Navbar