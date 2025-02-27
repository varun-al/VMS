import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const IdentityVerification = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = () => {
    console.log("OTP entered:", otp);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Identity Verification
        </Typography>
        <TextField
          fullWidth
          label="Enter OTP"
          value={otp}
          onChange={handleChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleVerify} sx={{ mt: 2 }}>
          Verify
        </Button>
      </Box>
    </Container>
  );
};

export default IdentityVerification;
