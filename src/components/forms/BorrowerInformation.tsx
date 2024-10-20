import React, { useState } from "react";
import { Box, TextField, Button, Grid, Typography, Grid2 } from "@mui/material";
import { faker } from "@faker-js/faker";
import BaseCard from "@/components/shared/BaseCard";

interface BorrowingDocumentProps {
  status?: string;
}

const BorrowerInformation: React.FC<BorrowingDocumentProps> = ({
  status = "create",
}) => {
  // State to manage form input
  const [borrowerName, setBorrowerName] = useState("");
  const [borrowerId, setBorrowerId] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  // Handle form submission
  // const handleFormSubmit = () => {
  //   const formData = {
  //     borrowerName,
  //     borrowerId,
  //     contactEmail,
  //   };
  //   console.log("Borrower Information:", formData);
  // };

  return (
    <BaseCard>
      <Box p={3} border="1px solid #ccc" borderRadius="8px">
        <Typography variant="h6" gutterBottom>
          Borrower Information
        </Typography>
        {status === "create" ? (
          <Grid2 container spacing={2}>
            {/* Borrower Name */}
            <Grid2 size={6}>
              <TextField
                label="Borrower Name"
                value={borrowerName}
                onChange={(e) => setBorrowerName(e.target.value)}
                fullWidth
              />
            </Grid2>

            {/* Borrower ID */}
            <Grid2 size={6}>
              <TextField
                label="Borrower ID"
                value={borrowerId}
                onChange={(e) => setBorrowerId(e.target.value)}
                fullWidth
              />
            </Grid2>

            {/* Contact Information */}
            <Grid2 size={12}>
              <TextField
                label="Contact Email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                fullWidth
              />
            </Grid2>
          </Grid2>
        ) : (
          <Grid2 container spacing={2}>
            {/* Borrower Name */}
            <Grid2 size={12}>
              <TextField
                label="Borrower Name"
                defaultValue={faker.person.fullName()}
                variant="standard"
                disabled
                fullWidth
              />
            </Grid2>

            {/* Borrower ID */}
            <Grid2 size={12}>
              <TextField
                label="Borrower ID"
                defaultValue={faker.string.uuid()}
                variant="standard"
                disabled
                fullWidth
              />
            </Grid2>

            {/* Contact Information */}
            <Grid2 size={12}>
              <TextField
                label="Contact Email"
                defaultValue={faker.internet.email()}
                variant="standard"
                disabled
                fullWidth
              />
            </Grid2>
          </Grid2>
        )}
      </Box>
    </BaseCard>
  );
};

export default BorrowerInformation;
