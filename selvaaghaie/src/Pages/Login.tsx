import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clouds from "../assets/lo.png";

const Login = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  const [name, setName] = useState("");

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
    document.body.dir = language === "fa" ? "rtl" : "ltr";
  }, [language, i18n]);

  const handleLogin = () => {
    alert(`${t("logging_in_as")}: ${name}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
      >
        <Paper
          sx={{
            backgroundColor: "logInPaper.default",
            display: "flex",
            flexDirection: "row",
            width: { xs: "100%", sm: "90%", md: "980px" },
            height: { xs: "auto", md: "560px" },
            borderRadius: "12px",
            boxShadow: "0px 4px 8px 0px #00000040",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              flex: 1,
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              py: { xs: 4, md: 0 },
              px: 2,
            }}
          >
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap={3}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                textAlign="center"
              >
                {t("login")}
              </Typography>
              <TextField
                fullWidth
                sx={{
                  width: { xs: "100%", sm: "300px" },
                  mx: "auto",
                }}
                variant="outlined"
                label={t("enter_your_name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Link
              to="dash"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              <Button
                sx={{
                  width: { xs: "100%", sm: "300px" },
                  mt: 2,
                  backgroundColor: "primary.main",
                  color: "#FFFFFF",
                }}
                variant="contained"
                onClick={handleLogin}
              >
                {t("login")}
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              flex: 1,
              backgroundColor: "transparent",
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              height: { md: "100%" },
            }}
          >
            <img
              src={clouds}
              alt="Weather Illustration"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Paper>

        <Box mt={2}>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            textAlign="center"
          >
            {t("language")}
          </Typography>
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            variant="standard"
            sx={{ minWidth: 120 }}
          >
            <MenuItem value="en">{t("english")}</MenuItem>
            <MenuItem value="fa">{t("persian")}</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
