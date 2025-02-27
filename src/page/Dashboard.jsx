import React from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

const Dashboard = () => {
  const stats = [
    { title: "Total Visitors", value: 120 },
    { title: "Checked-In Visitors", value: 90 },
    { title: "Pending Approvals", value: 10 },
    { title: "Checked-Out Visitors", value: 80 },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 5, mb: 3, textAlign: "center" }}>
        Visitor Management Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ p: 3, textAlign: "center", bgcolor: "#1976d2", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">{stat.title}</Typography>
                <Typography variant="h4">{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
