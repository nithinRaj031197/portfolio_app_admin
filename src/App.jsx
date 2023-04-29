import React, { useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import { purple, green, red } from "@mui/material/colors";
import { ThemeContext } from "@emotion/react";
import { useModeContext } from "./context/ThemeContext";
import { Button } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Portfolios from "./pages/Portfolios";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  // const [darkMode, setDarkMode] = React.useState(false);
  const { mode, toggleMode, isDarkMode } = useModeContext();

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#000",
      },
      secondary: {
        main: green[500],
      },
      success: {
        main: green[900],
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "primary" },
            style: {
              backgroundColor: "#000",
              color: "#fff",
            },
          },
          {
            props: { variant: "secondary" },
            style: {
              backgroundColor: "#2196f3",
              color: "#fff",
            },
          },
        ],
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#2196f3", // blue
      },
      secondary: {
        main: "#fff",
      },
      success: {
        main: red[900],
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "primary" },
            style: {
              backgroundColor: "#2196f3",
              color: "#fff",
            },
          },
          {
            props: { variant: "secondary" },
            style: {
              backgroundColor: "#2196f3",
              color: "#fff",
            },
          },
        ],
      },
    },
  });

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        {/* <Switch checked={isDarkMode} onChange={toggleMode} />
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
        <Button variant="contained" color="primary">
          Primary Button
        </Button> */}
        {/* <Dashboard /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolios" element={<Portfolios />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
