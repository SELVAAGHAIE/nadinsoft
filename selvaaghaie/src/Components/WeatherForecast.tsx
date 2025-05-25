import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import GrainIcon from "@mui/icons-material/Grain";
import Sunny from "./sunny.png";
import cloudy from "../assets/cloudy.png";
import rainy from "../assets/rainy.png";
import thunder from "../assets/thunder.png";
import { useTranslation } from "react-i18next";
const getWeatherIcon = (type) => {
  switch (type) {
    case "Clouds":
      return (
        <img
          src={cloudy}
          alt="Cloudy"
          style={{ width: "72px", height: "65px", margin: 0 }}
        />
      );
    case "Clear":
      return (
        <img
          src={Sunny}
          alt="Sunny"
          style={{ width: "72px", height: "65px", margin: 0 }}
        />
      );
    case "Thunder":
      return (
        <img
          src={thunder}
          alt="Thunder"
          style={{ width: "72px", height: "65px", margin: 0 }}
        />
      );
    case "Rain":
      return (
        <img
          src={rainy}
          alt="Rainy"
          style={{ width: "72px", height: "65px", margin: 0 }}
        />
      );
    case "sunny":
      return (
        <img
          src={Sunny}
          alt="Sunny"
          style={{ width: "72px", height: "65px", margin: 0 }}
        />
      );

    default:
      return <CloudIcon sx={{ fontSize: 40 }} />;
  }
};

function WeatherForecast({ weatherData }) {
  const { t, i18n } = useTranslation();
  if (!weatherData || !weatherData.forecast11Days) {
    return (
      <Typography variant="body1" align="center" mt={2}>
        No forecast data available.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "24px",
        padding: 2,
        pt: 3,
        pb: 4,
        width: "96%",
        margin: "auto",
        boxShadow: 3,
        mt: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "text.primary",
          mb: 3,
          ml: 2,
        }}
      >
        {t("weeksForecast")}
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ overflowX: "auto", flexWrap: "nowrap" }}
      >
        {weatherData.forecast11Days.map((item, index) => (
          <Grid
            item
            key={index}
            sx={{
              Width: "104px",
              height: "266px",
              flexShrink: 0,
            }}
            size={{ sx: 12 }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: "24px",
                backgroundColor: "pbg.primary",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: "16px",
                paddingLeft: "16px",
                paddingTop: "22px",
                paddingBottom: "22px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: "text.primary",
                  borderBottom: "2px solid",
                  borderImageSource:
                    "linear-gradient(90deg, rgba(54, 54, 54, 0) 0%, #7E7E7E 48.5%, rgba(54, 54, 54, 0) 100%)",
                  borderImageSlice: 1,
                  paddingBottom: "12px",
                }}
              >
                {item.day}
              </Typography>
              {getWeatherIcon(item.icon)}
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                {item.temp}°C
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WeatherForecast;
