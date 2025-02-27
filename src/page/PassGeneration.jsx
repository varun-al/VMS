import React from "react";
import { Card, CardContent, Typography, Container, Box } from "@mui/material";

const PassGeneration = () => {
  const visitorPass = {
    name: "John Doe",
    id: "VMS123456",
    time: "10:30 AM",
    date: "Feb 27, 2025",
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Visitor Pass
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">Name: {visitorPass.name}</Typography>
            <Typography variant="body1">Visitor ID: {visitorPass.id}</Typography>
            <Typography variant="body1">Time: {visitorPass.time}</Typography>
            <Typography variant="body1">Date: {visitorPass.date}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default PassGeneration;
