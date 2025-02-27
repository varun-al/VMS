import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import Navbar from "./components/Navbar";

import Dashboard from "./page/Dashboard";
import VisitorCheckIn from "./page/VisitorCheckIn";
import IdentityVerification from "./page/IdentityVerification";
import VehicleRegistration from "./page/VehicleRegistration";
import PassGeneration from "./page/PassGeneration";
import VisitorDatabase from "./page/VisitorDatabase";
import HostNotification from "./page/HostNotification";
import PreScheduling from "./page/PreScheduling";
import VisitorTracking from "./page/VisitorTracking";
import AdminPanel from "./page/AdminPanel";


function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/check-in" element={<VisitorCheckIn />} />
          <Route path="/identity-verification" element={<IdentityVerification />} />
          <Route path="/vehicle-registration" element={<VehicleRegistration />} />
          <Route path="/pass-generation" element={<PassGeneration />} />
          <Route path="/visitor-database" element={<VisitorDatabase />} />
          <Route path="/host-notification" element={<HostNotification />} />
          <Route path="/pre-scheduling" element={<PreScheduling />} />
          <Route path="/visitor-tracking" element={<VisitorTracking />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
