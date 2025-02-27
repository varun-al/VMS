import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Visitor Management System
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/visitor-tracking">
          Visitor Tracking
        </Button>
        <Button color="inherit" component={Link} to="/check-in">
          Check-In
        </Button>
        <Button color="inherit" component={Link} to="/pre-scheduling">
          Pre-Scheduling
        </Button>
        <Button color="inherit" component={Link} to="/vehicle-registration">
          Vehicle Registration
        </Button>
        <Button color="inherit" component={Link} to="/host-notification">
          Host Notification
        </Button>
        <Button color="inherit" component={Link} to="/admin">
          Admin Panel
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
