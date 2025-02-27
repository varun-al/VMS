import React from "react";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";

const HostNotification = () => {
  const handleNotify = () => {
    console.log("Host Notified!");
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 5, p: 3, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Host Notification
          </Typography>
          <Typography variant="body1">
            Visitor: John Doe
          </Typography>
          <Typography variant="body1">
            Meeting with: Jane Smith (Host)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Arrival Time: 2:30 PM
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleNotify}>
            Notify Host
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default HostNotification;
