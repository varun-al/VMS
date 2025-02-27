import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const PreSchedulingApproval = () => {
  const [schedule, setSchedule] = useState({
    visitorName: "",
    visitDate: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Pre-Scheduled Visit Details:", schedule);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Pre-Scheduling & Approval
        </Typography>
        <TextField
          fullWidth
          label="Visitor Name"
          name="visitorName"
          value={schedule.visitorName}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          type="date"
          name="visitDate"
          value={schedule.visitDate}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Purpose of Visit"
          name="purpose"
          value={schedule.purpose}
          onChange={handleChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Submit for Approval
        </Button>
      </Box>
    </Container>
  );
};

export default PreSchedulingApproval;
