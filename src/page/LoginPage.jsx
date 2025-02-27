import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Card, CardContent } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { login } = useAuth();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    login(credentials.username, credentials.password);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <Card sx={{ p: 4, width: "100%" }}>
          <CardContent>
            <Typography variant="h5" textAlign="center" gutterBottom>
              Login to VMS
            </Typography>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginPage;
