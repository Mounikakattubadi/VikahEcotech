import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Enquire from './Enquire';
import Baler from './Baler';
import Shredder from './Shredder';
import Tyrecutting from './Tyrecutting';
import Tyrefolding from './Tyrefolding';
import Tyrescrapbaler from './Tyrescrapbaler';
import Tyreshredder from './Tyreshredder';
import Plasticbaler from './Plasticbaler';
import Pcb from './pcb';
import Metalbaler from './Metalbaler';
import Metalshredder from './Metalshredder';
import Plasticshredder from './Plasticshredder';
import Papershredder from './papershredder';
import BLT150 from './Blt150';
import BLT200 from './Blt200';
import BLT250 from './Blt250';
import Tcpcr100 from './Tcpcr100.js';
import Tcotr100 from './Tcotr100.js';
import Tctb100 from './Tctb100.js';
import Tftbr100 from './Tftbr100.js';
import Tfpcr100 from './Tfpcr100.js';
import Sht6000 from './Sht6000.js';
import Sht8000 from './Sht8000.js';
import Sht12000 from './Sht12000.js';
import Ourproducts from './Ourproducts.js';
import Tradefairs from './Tradefairs.js';
import Ifat from './ifat.js';
import CompletedTradefair1 from './CompletedTradefair1';
import Rasper from './Rasper.js';
import Contact from './Contact.js';

function App() {
  return (
    <Router>
      <Navbar />
      
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/enquire" element={<Enquire />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/baler" element={<Baler/>} />
        <Route exact path="/tyrescrapbaler" element={<Tyrescrapbaler />} />
        <Route exact path="/plasticbaler" element={<Plasticbaler/>} />
        <Route exact path="/pcb" element={<Pcb />} />
        <Route exact path="/metalbaler" element={<Metalbaler />} />
        <Route path="/shredder" element={<Shredder/>} />
        <Route exact path="/tyreshredder" element={<Tyreshredder />} />
        <Route exact path="/metalshredder" element={<Metalshredder />} />
        <Route exact path="/plasticshredder" element={<Plasticshredder />} />
        <Route exact path="/papershredder" element={<Papershredder />} />
        <Route exact path="/tyrecutting" element={<Tyrecutting />} />
        <Route exact path="/tyrefolding" element={<Tyrefolding />} />

        <Route exact path="/ourproducts" element={<Ourproducts />} />
        <Route exact path="/blt150" element={<BLT150 />} />
        <Route exact path="/blt200" element={<BLT200 />} />
        <Route exact path="/blt250" element={<BLT250 />} />
        <Route path="/tfpcr100" element={<Tfpcr100 />} />
        <Route path="/tftbr100" element={<Tftbr100 />} />
        <Route path="/tcpcr100" element={<Tcpcr100 />} />
        <Route path="/tctb100" element={<Tctb100 />} />
        <Route path="/tcotr100" element={<Tcotr100 />} />

        <Route path="/sht6000" element={<Sht6000 />} />
        <Route path="/sht8000" element={<Sht8000 />} />
        <Route path="/sht12000" element={<Sht12000/>} />

        <Route path="/Rasper" element={<Rasper />} />

        <Route path="/Tradefairs" element={<Tradefairs />} />
        <Route path="/ifat" element={<Ifat />} />
        <Route path="/completedTradefair1" element={<CompletedTradefair1 />} />

        </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
