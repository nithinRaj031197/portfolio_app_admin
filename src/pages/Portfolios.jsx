import { Box, Paper, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MultistepDialog from "../components/MultistepDialog";
import PortfolioForm from "../components/PortfolioForm";

const Portfolios = () => {
  const theme = useTheme();
  //   console.log(theme.palette);@material-ui/core
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      const windowHeight = window.innerHeight;
      const headerHeight = document.querySelector("header")?.clientHeight;

      const remainingHeight = windowHeight - headerHeight - 16; // 16 --> margin on paper
      setMinHeight(remainingHeight);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const steps = [
    {
      title: "Step 1",
      content: <p>Step 1 content</p>,
    },
    {
      title: "Step 2",
      content: <p>Step 2 content</p>,
    },
    {
      title: "Step 3",
      content: <p>Step 3 content</p>,
    },
  ];
  return (
    <>
      <Paper color={theme.palette.secondary.main} sx={{ minHeight, m: 1 }} elevation={3}>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button variant="outlined" sx={{ mr: 1, mt: 1 }} startIcon={<AddIcon />} onClick={() => setOpen(true)}>
            Create
          </Button>
        </Box>
        {/* <MultistepDialog
          open={open}
          onClose={handleClose}
          steps={steps}
          initialStep={0}
        /> */}
        {/* <CreatePortfolioForm /> */}
        <PortfolioForm />
      </Paper>
    </>
  );
};

export default Portfolios;
