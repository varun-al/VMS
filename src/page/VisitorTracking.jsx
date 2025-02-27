import React from "react";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";

const VisitorTracking = () => {
  const handleTrack = () => {
    console.log("Tracking Visitor...");
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 5, p: 3, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Visitor Tracking
          </Typography>
          <Typography variant="body1">
            Visitor: John Doe
          </Typography>
          <Typography variant="body1">
            Last Seen: Meeting Room 2
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Tracking ID: #987654
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleTrack}>
            Refresh Tracking
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default VisitorTracking;
