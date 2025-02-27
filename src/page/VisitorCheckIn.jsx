import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText } from "@mui/material";

const VisitorCheckIn = () => {
  const [visitor, setVisitor] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    reason: "",
    vehicleType: "",
    vehicleNumber: "",
    documents: [],
    assets: [],
  });

  const documentOptions = ["Aadhar Card", "PAN Card", "Driving License", "Company ID"];
  const assetOptions = ["Phone", "Laptop", "Tablet", "Hard Drive", "Other"];
  const vehicleTypes = ["2-Wheeler", "4-Wheeler", "Goods Vehicle","None"];

  const handleChange = (e) => {
    setVisitor({ ...visitor, [e.target.name]: e.target.value });
  };

  const handleMultiSelect = (event, field) => {
    setVisitor({ ...visitor, [field]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Visitor Data:", visitor);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 4, border: "1px solid #ccc", borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Visitor Check-In
        </Typography>
        <TextField fullWidth label="Full Name" name="name" value={visitor.name} onChange={handleChange} margin="normal" required />
        <TextField fullWidth label="Email" type="email" name="email" value={visitor.email} onChange={handleChange} margin="normal" required />
        <TextField fullWidth label="Phone Number" type="tel" name="phone" value={visitor.phone} onChange={handleChange} margin="normal" required />
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Designation</InputLabel>
          <Select name="designation" value={visitor.designation} onChange={handleChange} required>
            <MenuItem value="Employee">Employee</MenuItem>
            <MenuItem value="Contractor">Contractor</MenuItem>
            <MenuItem value="Vendor">Vendor</MenuItem>
            <MenuItem value="Guest">Guest</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        <TextField fullWidth label="Reason for Visit" name="reason" value={visitor.reason} onChange={handleChange} margin="normal" multiline rows={2} required />

        <FormControl fullWidth margin="normal">
          <InputLabel>Vehicle Type</InputLabel>
          <Select name="vehicleType" value={visitor.vehicleType} onChange={handleChange}>
            {vehicleTypes.map((type) => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField fullWidth label="Vehicle Number (If applicable)" name="vehicleNumber" value={visitor.vehicleNumber} onChange={handleChange} margin="normal" />

        <FormControl fullWidth margin="normal">
          <InputLabel>Submitted Documents</InputLabel>
          <Select multiple value={visitor.documents} onChange={(e) => handleMultiSelect(e, "documents")} renderValue={(selected) => selected.join(", ")}>
            {documentOptions.map((doc) => (
              <MenuItem key={doc} value={doc}>
                <Checkbox checked={visitor.documents.includes(doc)} />
                <ListItemText primary={doc} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Assets Brought</InputLabel>
          <Select multiple value={visitor.assets} onChange={(e) => handleMultiSelect(e, "assets")} renderValue={(selected) => selected.join(", ")}>
            {assetOptions.map((asset) => (
              <MenuItem key={asset} value={asset}>
                <Checkbox checked={visitor.assets.includes(asset)} />
                <ListItemText primary={asset} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default VisitorCheckIn;
