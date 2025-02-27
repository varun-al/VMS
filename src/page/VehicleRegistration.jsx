import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const VehicleRegistration = () => {
  const [vehicle, setVehicle] = useState({
    number: "",
    model: "",
    color: "",
  });

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Vehicle Data Submitted:", vehicle);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Vehicle Registration
        </Typography>
        <TextField
          fullWidth
          label="Vehicle Number"
          name="number"
          value={vehicle.number}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Vehicle Model"
          name="model"
          value={vehicle.model}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Vehicle Color"
          name="color"
          value={vehicle.color}
          onChange={handleChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Register Vehicle
        </Button>
      </Box>
    </Container>
  );
};

export default VehicleRegistration;
