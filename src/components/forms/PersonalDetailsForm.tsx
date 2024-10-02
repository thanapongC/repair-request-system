import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

interface PersonalDetailsFormProps {
  onSubmit?: (data: {
    email: string;
    name: string;
    surname: string;
    tel: string;
    department: string;
    address: string;
  }) => void;
}

const departments = ["Sales", "Marketing", "Engineering", "HR", "Finance"]; // Example departments

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [tel, setTel] = useState("");
  const [department, setDepartment] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    // event.preventDefault();
    // if (!email || !name || !surname || !tel || !department || !address) {
    //   alert('All fields are required');
    //   return;
    // }
    // // Call the submit handler with the form data
    // onSubmit({ email, name, surname, tel, department, address });
  };

  return (
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            defaultValue="Mathew Anderson"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Company"
            variant="outlined"
            defaultValue="Anderson"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            defaultValue="info@modernize.com"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            defaultValue="+66 987 9884"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Department"
            variant="outlined"
            defaultValue="Engineering"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Position"
            variant="outlined"
            defaultValue="Engineer"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            defaultValue="123 Howard Street, 29384, CNX, Thailand"
          />
        </Grid>
      </Grid>
  );
};

export default PersonalDetailsForm;
