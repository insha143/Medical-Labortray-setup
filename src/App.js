import React, { useState } from 'react'; // Import useState
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Xray from './Xray';
import Labrec from './Labrec';
import Inventory from './Inventory';
import Updatelabrec from './Updatelabrec';
import Addrec from './Addrec';
import Addxrayrec from './Addxrayrec';
import Updatexrayrec from './Updatexrayrec';
import Ultraso from './Ultraso';
import Addultraso from './Addultraso';
import Updateultraso from './Updateultraso';
import Kami from './kami';
import PrintRecord from './PrintRecord';
import Navbr from './Navbar';

function App() {
  const [printData, setPrintData] = useState(null); // Define printData here

  return (
    <div>
      <Router>
        <Navbr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/xray" element={<Xray />} />
          <Route path="/labrec" element={<Labrec setPrintData={setPrintData} />} /> {/* Pass setPrintData */}
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/updatelabrec/:id" element={<Updatelabrec />} />
          <Route path="/addrec" element={<Addrec />} />
          <Route path="/addxrayrec" element={<Addxrayrec />} />
          <Route path="/updatexrayrec" element={<Updatexrayrec />} />
          <Route path="/ultraso" element={<Ultraso />} />
          <Route path="/addultraso" element={<Addultraso />} />
          <Route path="/updateultraso/:id" element={<Updateultraso />} />
          <Route path="/kami" element={<Kami />} />
          <Route path="/printrecord" element={<PrintRecord records={printData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
