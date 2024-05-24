import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Allstar from './Allstar';
import Details from './Buy';
import Elite from './Elite';
import Fencing from './Fencing';
import ContactForm from './Form';
import Home from './Home';
import LiftMaster from './LiftMaster';
import Locks from './Locks';
import Long from './Long';
import Loop from './Loop';
import ModernBalconyRailings from './ModernBalconyRailings';
import ModernDrivewayGates from './ModernDrivewayGates';
import Osco from './Osco';
import PlatinumGateOpeners from './PlatinumGateOpeners';
import PrivacyGardenGates from './PrivacyGardenGates';
import Receiver from './Receiver';
import Remote from './Remote';
import Sea from './Sea';
import Sentex from './Sentex';
import Wheels from './Wheels';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider>
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ModernDrivewayGates" element={<ModernDrivewayGates />} />
        <Route path="/PrivacyGardenGates" element={<PrivacyGardenGates />} />
        <Route path="/Fencing" element={<Fencing />} />
        <Route path="/ModernBalconyRailings" element={<ModernBalconyRailings />} />
        <Route path="/PlatinumGateOpeners" element={<PlatinumGateOpeners />} />
        <Route path="/OSCO" element={<Osco />} />
        <Route path="/Allstar" element={<Allstar />} />
        <Route path="/SEA" element={<Sea />} />
        <Route path="/Multi-Code" element={<Remote />} />
        <Route path="/Long-Range" element={<Long />} />
        <Route path="/Receivers" element={<Receiver />} />
        <Route path="/LiftMaster" element={<LiftMaster />} />
        <Route path="/Sentex" element={<Sentex />} />
        <Route path="/Elite" element={<Elite />} />
        <Route path="/Loop" element={<Loop />} />
        <Route path="/Cantilever-Wheels" element={<Wheels />} />
        <Route path="/Locks-Latches" element={<Locks />} />
        <Route path="/Custom-Aluminum" element={<Details />} />
        <Route path="/Contact-Us" element={<ContactForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
  </MantineProvider>

);