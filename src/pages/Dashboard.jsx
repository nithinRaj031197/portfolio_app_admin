import React from "react";
import { styled } from "@mui/material/styles";
import { Paper, TextField, Button } from "@mui/material";
import { alpha } from "@mui/material/styles";

const GlassPaper = styled(Paper)(({ theme }) => ({
  backdropFilter: "blur(10px)",
  backgroundColor: alpha(theme.palette.background.paper, 0.8),
  borderRadius: "10px",
  padding: "1rem",
  boxShadow:
    "4px 4px 20px rgba(0, 0, 0, 0.1), -4px -4px 20px rgba(255, 255, 255, 0.1)",
  "& .MuiTextField-root": {
    margin: "0.5rem 0",
  },
  "& .MuiButton-root": {
    marginTop: "1rem",
  },
}));

const Dashboard = () => {
  return (
    <div>
      <GlassPaper>
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <Button variant="contained" fullWidth>
          Send
        </Button>
      </GlassPaper>
    </div>
  );
};

export default Dashboard;
