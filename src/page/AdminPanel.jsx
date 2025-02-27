import React from "react";
import { Container, Typography, Card, CardContent, Button, List, ListItem, ListItemText } from "@mui/material";

const AdminPanel = () => {
  const visitorLogs = [
    { id: 1, name: "John Doe", status: "Checked In" },
    { id: 2, name: "Jane Smith", status: "Checked Out" },
    { id: 3, name: "Mike Johnson", status: "Pending Approval" },
  ];

  const handleApprove = (id) => {
    console.log("Approved Visitor ID:", id);
  };

  return (
    <Container maxWidth="md">
      <Card sx={{ mt: 5, p: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Admin Panel - Visitor Logs
          </Typography>
          <List>
            {visitorLogs.map((log) => (
              <ListItem key={log.id} divider>
                <ListItemText primary={log.name} secondary={`Status: ${log.status}`} />
                {log.status === "Pending Approval" && (
                  <Button variant="contained" color="primary" onClick={() => handleApprove(log.id)}>
                    Approve
                  </Button>
                )}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AdminPanel;
