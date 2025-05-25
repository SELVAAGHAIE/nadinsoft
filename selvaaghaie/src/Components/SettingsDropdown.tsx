import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { ThemeContext } from "../ThemeContext";
import { useTranslation } from "react-i18next";

export default function SettingsDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { mode, toggleTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleModeChange = (event, newMode) => {
    if (newMode && newMode !== mode) {
      toggleTheme();
    }
  };

  const handleLanguageChange = (event, newLang) => {
    if (newLang && newLang !== language) {
      setLanguage(newLang);
      i18n.changeLanguage(newLang);
      localStorage.setItem("lang", newLang);
      document.body.dir = newLang === "fa" ? "rtl" : "ltr";
    }
  };

  useEffect(() => {
    document.body.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <IconButton
        onClick={handleClick}
        color="inherit"
        size="large"
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <SettingsOutlinedIcon
          sx={{
            fontSize: "1.3rem",

            color: "#BBC1C4",
          }}
        />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box
          sx={{
            padding: 2,
            width: "220px",
            minheight: "240px",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="subtitle2" gutterBottom>
            Mode
          </Typography>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleModeChange}
            fullWidth
          >
            <ToggleButton value="light">Light</ToggleButton>
            <ToggleButton value="dark">Dark</ToggleButton>
          </ToggleButtonGroup>

          <Divider sx={{ marginY: 2 }} />

          <Typography variant="subtitle2" gutterBottom>
            Language
          </Typography>
          <ToggleButtonGroup
            value={language}
            exclusive
            onChange={handleLanguageChange}
            fullWidth
          >
            <ToggleButton value="en">En</ToggleButton>
            <ToggleButton value="fa">Fa</ToggleButton>
          </ToggleButtonGroup>

          <Divider sx={{ marginY: 2 }} />
          <Link to="/">
            <Button fullWidth onClick={handleClose}>
              Exit
            </Button>
          </Link>
        </Box>
      </Menu>
    </Box>
  );
}
