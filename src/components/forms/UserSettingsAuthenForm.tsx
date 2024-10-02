import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface RegistrationFormProps {
  onSubmit?: (data: {
    email: string;
    username: string;
    password: string;
    role: string;
  }) => void;
}

const roles = ["Admin", "User", "Guest"]; // Example roles

const UserAuthenForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("Test@testmail.co.th");
  const [password, setPassword] = useState("123456789");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !username || !password || !role) {
      alert("All fields are required");
      return;
    }

    // Call the submit handler with the form data
    // onSubmit({ email, username, password, role });
  };

  return (
    <>
      {/* Username Field */}
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
        size="small"
        required
      />

      <Grid container>
        <Grid item xs={8}>
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            size="small"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid container item xs={4} justifyContent={"center"} justifyItems={"center"} alignContent={"center"}>
          <Button
            variant="contained"
            color="success"
            style={{marginTop: 5, marginLeft: 10}}
            fullWidth
          >
            Generate
          </Button>
        </Grid>
      </Grid>

      {/* Role Selection Field */}
      <TextField
        select
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        fullWidth
        margin="normal"
        size="small"
        required
      >
        {roles.map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default UserAuthenForm;
