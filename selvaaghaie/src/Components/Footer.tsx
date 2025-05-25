import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsDropdown from "./SettingsDropdown.jsx";
import footer from "../assets/icon copy - Copy - Copy 1.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "background.paper",
        boxShadow: { xs: "none", sm: "0px 4px 10px 0px #00000026" },
        color: "text.primary",
        minheight: "106px",
        width: "100%",
        mb: 0,
        mt: "7rem",
        px: "24px",
        py: "28px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={footer} sx={{ width: 58, height: 58, mr: 1 }} />
          <Typography
            variant="h6"
            fontWeight={400}
            fontSize={14}
            letterSpacing={0.15}
            lineHeight="150%"
            px={"8px"}
          >
            {t(
              "AllrightsofthissitearereservedforNadinSadrAriaEngineeringCompany"
            )}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "40px",
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <EmailOutlinedIcon />
            <Typography fontSize={14}>{t("contactusinfonadinir")}</Typography>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <CalendarMonthOutlinedIcon />
            <Typography fontSize={14}>{t("Monday23December2023")}</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
