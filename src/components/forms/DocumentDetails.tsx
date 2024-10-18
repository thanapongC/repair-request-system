import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Grid2,
} from "@mui/material";
import { faker } from '@faker-js/faker';

interface BorrowingDocumentProps {
  status?: string;
}

const BorrowingDocument: React.FC<BorrowingDocumentProps> = ({ status = 'create'}) => {
  // State to manage form input
  const [documentId, setDocumentId] = useState("");
  const [site, setSite] = useState(faker.location.cardinalDirection()+ '-' + Math.floor(Math.random() * 100));
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Handle form submission
  // const handleFormSubmit = () => {
  //   const formData = {
  //     documentId,
  //     issueDate,
  //     returnDate,
  //     status,
  //   };
  //   console.log("Form Data:", formData);
  // };

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <Box p={3} border="1px solid #ccc" borderRadius="8px">
      <Typography variant="h6" gutterBottom>
        Equipment Borrowing Document
      </Typography>

      {status === 'create' ? (
        <Grid2 container spacing={2}>
          {/* Document ID */}
          <Grid2 size={6}>
            <TextField
              label="Document ID"
              value={documentId}
              onChange={(e) => setDocumentId(e.target.value)}
              fullWidth
            />
          </Grid2>

          {/* Issue Date */}
          <Grid2 size={6}>
            <TextField
              label="Create Date"
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              fullWidth
            />
          </Grid2>

          <Grid2 size={6}>
            <TextField label="Site ID" type="text" fullWidth />
          </Grid2>
          <Grid2 size={6}>
            <TextField label="Site Name" type="text" fullWidth />
          </Grid2>
        </Grid2>
      ) : (
        <Grid2 container spacing={2}>
          {/* Document ID */}
          <Grid2 size={12}>
            <TextField
              label="Document ID"
              value={"B-23874"}
              fullWidth
              variant="standard"
              disabled
            />
          </Grid2>

          {/* Issue Date */}
          <Grid2 size={12}>
            <TextField
              label="Create Date"
              type="date"
              value={currentDate}
              fullWidth
              variant="standard"
              disabled
            />
          </Grid2>

          <Grid2 size={12}>
            <TextField label="Site ID" variant="standard" defaultValue={site} type="text" fullWidth disabled/>
          </Grid2>
          <Grid2 size={12}>
            <TextField label="Site Name" variant="standard" defaultValue={site} type="text" fullWidth disabled/>
          </Grid2>
        </Grid2>
      )}
    </Box>
  );
};

export default BorrowingDocument;
