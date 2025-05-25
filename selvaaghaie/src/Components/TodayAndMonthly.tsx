import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Sunny from "./sunny.png";
import cloudy from "../assets/cloudy.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import rainy from "../assets/rainy.png";
import thunder from "../assets/thunder.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { useTranslation } from "react-i18next";
function TodayAndMonthly({ weatherData }) {
  const { t, i18n } = useTranslation();
  if (!weatherData) {
    return (
      <Box p={3} textAlign="center">
        <Typography variant="body1">
          {t("Please select a country to view the weather")}
        </Typography>
      </Box>
    );
  }
  const data = weatherData;
  const monthlyData = data.monthlyAverages || [];

  console.log("Monthly Chart Data:", monthlyData);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "96%",
        minheight: "234px",
        margin: "auto",
      }}
    >
      <Grid
        container
        columnSpacing={5}
        rowGap={{ xs: 6 }}
        columns={20}
        sx={{ height: "100%", width: "100%" }}
      >
        <Grid item size={{ xs: 20, md: 9 }} sx={{ height: "100%" }}>
          <Paper
            sx={{
              height: "100%",
              borderRadius: "24px",
              width: "100%",
              py: "20px",
              px: "24px",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ height: "100%", width: "100%" }}
            >
              <Grid
                container
                columns={18}
                spacing={0}
                width="100%"
                height="100%"
              >
                {/* Left Column */}
                <Grid
                  item
                  size={8}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  textAlign="center"
                  bgcolor="transparent"
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    bgcolor="#CDD9E0"
                    sx={{
                      borderRadius: "50px",
                      width: "173px",
                      height: "40px",
                      py: "10px",
                      px: "13px",
                    }}
                  >
                    <LocationOnIcon
                      sx={{
                        color: "#3D4852",
                        fontSize: "25px",
                      }}
                      fontSize="100px"
                    />
                    <Typography variant="Inter" color="#3D4852">
                      <strong>{data.country}</strong>
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "32px",
                      fontWeight: "500",
                    }}
                  >
                    {data.weekday}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    {data.fullDate} - {data.time}
                  </Typography>

                  <Box mt={2} display="flex" alignItems="center">
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "32px",
                        fontWeight: "500",
                      }}
                    >
                      {Math.round(data.temp)}° C
                    </Typography>
                  </Box>

                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    {t("High")}: {Math.round(data.tempMax)}&nbsp;&nbsp;
                    {t("Low")} : {Math.round(data.tempMin)}
                  </Typography>
                </Grid>
                <Grid
                  item
                  size={10}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    {data.description.toLowerCase().includes("clear") ? (
                      <img
                        src={Sunny}
                        alt="Sunny"
                        style={{ width: 187, height: 129, margin: 0 }}
                      />
                    ) : data.description.toLowerCase().includes("cloud") ? (
                      <img
                        src={cloudy}
                        alt="Cloudy"
                        style={{ width: 187, height: 129, margin: 0 }}
                      />
                    ) : data.description.toLowerCase().includes("rain") ? (
                      <img
                        src={rainy}
                        alt="Rainy"
                        style={{ width: 187, height: 129, margin: 0 }}
                      />
                    ) : data.description.toLowerCase().includes("thunder") ? (
                      <img
                        src={thunder}
                        alt="Thunder"
                        style={{ width: 187, height: 129, margin: 0 }}
                      />
                    ) : data.description.toLowerCase().includes("رعد") ? (
                      <img
                        src={thunder}
                        alt="Thunder"
                        style={{ width: 187, height: 129, margin: 0 }}
                      />
                    ) : data.description.toLowerCase().includes("باران") ? (
                      <img
                        src={rainy}
                        alt="Rainy"
                        style={{ width: 187, height: 129, margin: 0 }}
                      />
                    ) : data.description.toLowerCase().includes("ابر") ? (
                      <img
                        src={cloudy}
                        alt="ابر"
                        style={{ width: 187, height: 129, margin: 0 }}
                      />
                    ) : data.description.toLowerCase().includes("افتاب") ? (
                      <img
                        src={Sunny}
                        alt="Sunny"
                        style={{ width: 187, height: 129, margin: 0 }}
                      />
                    ) : data.description.toLowerCase().includes("صاف") ? (
                      <img
                        src={Sunny}
                        alt="Sunny"
                        style={{ width: 187, height: 129, margin: 0 }}
                      />
                    ) : data.description.toLowerCase().includes("clear") ? (
                      <img
                        src={Sunny}
                        alt="Sunny"
                        style={{ width: 187, height: 129, margin: 0 }}
                      />
                    ) : (
                      "error"
                    )}

                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontWeight: "400",
                      }}
                    >
                      {data.description}
                    </Typography>

                    <Typography sx={{ fontWeight: "400" }}>
                      {t("FeelsLike")} {Math.round(data.feelsLike)}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item size={{ xs: 20, md: 11 }} sx={{ height: "100%" }}>
          <Paper
            sx={{
              height: "100%",
              borderRadius: "24px",
              padding: "16px",
              backgroundColor: "background.paper",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: 1,
                letterSpacing: 0,
                pb: "16px",
              }}
            >
              {t("averageMonthlyTemperature")}
            </Typography>

            <ResponsiveContainer width="98%" height={190}>
              <LineChart data={monthlyData}>
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(76, 223, 232, 1)" />
                    <stop offset="20%" stopColor="rgba(76, 223, 232, 1)" />
                    <stop offset="60%" stopColor="rgba(100, 150, 240, 1)" />
                    <stop offset="100%" stopColor="rgba(121, 71, 247, 1)" />
                  </linearGradient>
                  <linearGradient
                    id="areaGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(76, 223, 232, 1)" />
                    <stop offset="20%" stopColor="rgba(76, 223, 232, 1)" />
                    <stop offset="60%" stopColor="rgba(100, 150, 240, 1)" />
                    <stop offset="100%" stopColor="rgba(121, 71, 247, 1)" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  fontWeight={500}
                  fontSize={16}
                  dataKey="month"
                  tick={{ fontSize: 12 }}
                  stroke="#000000"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  fontWeight={500}
                  fontSize={16}
                  dataKey="avgTemp"
                  tick={{ fontSize: 12 }}
                  stroke="#000000"
                  domain={[10, 40]}
                  tickCount={4}
                  ticks={[10, 20, 30, 40]}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="avgTemp"
                  stroke="url(#lineGradient)"
                  fill="url(#areaGradient)"
                  fillOpacity={1}
                  dot={false}
                ></Area>
                <Line
                  type="monotone"
                  dataKey="avgTemp"
                  stroke="url(#lineGradient)"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TodayAndMonthly;
