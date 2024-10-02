import { Chip } from "@mui/material";
import React from "react";

interface StatusChipProps {
  status: string;
}

const StatusChip: React.FC<StatusChipProps> = ({ status }) => {
  return (
    <div>
      {status === "active" && (
        <Chip
          sx={{
            pl: "4px",
            pr: "4px",
            backgroundColor: "success.main", // สีเขียว
            color: "#fff",
          }}
          size="small"
          label={status}
        ></Chip>
      )}
      {status === "inactive" && (
        <Chip
          sx={{
            pl: "4px",
            pr: "4px",
            backgroundColor: "secondary.main", // สีเทา
            color: "#fff",
          }}
          size="small"
          label={status}
        ></Chip>
      )}
      {status === "waiting" && (
        <Chip
          sx={{
            pl: "4px",
            pr: "4px",
            backgroundColor: "error.main", // สีแดง
            color: "#fff",
          }}
          size="small"
          label={status}
        ></Chip>
      )}
      {status === "damaged" && (
        <Chip
          sx={{
            pl: "4px",
            pr: "4px",
            backgroundColor: "warning.main", // สีเหลือง
            color: "#fff",
          }}
          size="small"
          label="Damaged"
        ></Chip>
      )}
      {status === "returned-partially" && (
        <Chip
          sx={{
            pl: "4px",
            pr: "4px",
            backgroundColor: "info.main", // สีน้ำเงิน
            color: "#fff",
          }}
          size="small"
          label="Returned Partially"
        ></Chip>
      )}
      {status === "in-progress" && (
        <Chip
          sx={{
            pl: "4px",
            pr: "4px",
            backgroundColor: "primary.main", // สีน้ำเงินเข้ม
            color: "#fff",
          }}
          size="small"
          label="In Progress"
        ></Chip>
      )}
      {status === "borrowed" && (
        <Chip
          sx={{
            pl: "4px",
            pr: "4px",
            backgroundColor: "success.light", // สีเขียวอ่อน
            color: "success.main",
          }}
          size="small"
          label="Borrowed"
        ></Chip>
      )}
      {status === "returned" && (
        <Chip
          sx={{
            pl: "4px",
            pr: "4px",
            backgroundColor: "success.main", // สีเขียว (เหมือน active)
            color: "#fff",
          }}
          size="small"
          label="Returned"
        ></Chip>
      )}
      {status === "overdue" && (
        <Chip
          sx={{
            pl: "4px",
            pr: "4px",
            backgroundColor: "error.main", // สีแดง (เหมือน waiting)
            color: "#fff",
          }}
          size="small"
          label="Overdue"
        ></Chip>
      )}
    </div>
  );
};

export default StatusChip;
