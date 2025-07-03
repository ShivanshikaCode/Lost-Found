import React from 'react';
import{ BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from'./components/navbar.jsx';
import Home from './Pages/Home.jsx';
import LostPage from './Pages/lostpage.jsx';
import FoundPage from './Pages/foundpage.jsx';
import ReportItem from './Pages/Reportpage.jsx';
import Support from './Pages/Support.jsx';

import './index.css'

function App() {
  return(
    <Router>
  <div>
    <Navbar/>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/report" element={<ReportItem/>}/>
<Route path="/lost" element={<LostPage/>}/>
<Route path="/found" element={<FoundPage/>}/>
<Route path="/support" element={<Support/>}/>

</Routes>
</div>
</Router>
  );
}

export default App
