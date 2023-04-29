import { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useModeContext } from "../context/ThemeContext";
import { Divider } from "@mui/material";
import { Link as RoutingLink } from "react-router-dom";

const StyledImage = styled("img")({
  width: "50px",
  height: "50px",
  marginRight: "16px",
});

const Navbar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { mode, toggleMode, isDarkMode } = useModeContext();

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar className="px-4">
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        {/* <StyledImage src={"https://picsum.photos/200"} alt="Logo" /> */}
        <Typography variant="h6" color="primary" noWrap>
          Admin Control
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="tabs"
          sx={{ mr: 4 }}
        >
          <Tab component={RoutingLink} to="/dashboard" label="Dashboard" />
          <Tab component={RoutingLink} to="/portfolios" label="Portfolios" />
        </Tabs>
        <IconButton color="primary" onClick={toggleMode} sx={{ mr: 2 }}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Avatar
          alt="User Profile"
          src={"https://picsum.photos/200"}
          sx={{ width: 40, height: 40 }}
        />
      </Toolbar>
      <Divider color="secondary" />
    </AppBar>
  );
};

export default Navbar;
