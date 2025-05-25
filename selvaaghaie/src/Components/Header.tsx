import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Avatar,
  CircularProgress,
  InputLabel,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import cloudAvatar from "../assets/cloudAvatar.png";
import SettingsDropdown from "./SettingsDropdown.jsx";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Header({ setWeatherData }) {
  const { t, i18n } = useTranslation();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const apiKey = "05db08794501978a4d34768b7260218d";

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("https://restcountries.com/v3.1/all");
        const localized = resp.data.map((c) => {
          const faName =
            c.name.common === "Iran"
              ? "ایران"
              : c.translations?.fas?.common ||
                c.translations?.per?.common ||
                c.name.common;

          return {
            en: c.name.common,
            fa: faName,
          };
        });
        const sorted = localized.sort((a, b) =>
          a[i18n.language].localeCompare(b[i18n.language])
        );

        setCountries(sorted);
        setSelectedCountry(sorted[0].en);
        await fetchWeather(sorted[0].en);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [i18n.language]);

  const fetchWeather = async (country) => {
    try {
      const geo = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct`,
        { params: { q: country, limit: 1, appid: apiKey } }
      );
      if (!geo.data.length) return;
      const { lat, lon } = geo.data[0];

      const [current, forecast] = await Promise.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            lat,
            lon,
            units: "metric",
            lang: i18n.language,
            appid: apiKey,
          },
        }),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            lat,
            lon,
            units: "metric",
            lang: i18n.language,
            appid: apiKey,
          },
        }),
      ]);

      const hourlyData = forecast.data.list.slice(0, 8).map((e) => ({
        hour: new Date(e.dt * 1000).toLocaleTimeString(i18n.language, {
          hour: "2-digit",
          minute: "2-digit",
        }),
        temp: Math.round(e.main.temp),
      }));
      const monthlyAverageTemps = Array.from({ length: 12 }, (_, i) => {
        const temps = Array.from({ length: 4 }, () => {
          return Math.floor(Math.random() * 40) - 5;
        });
        const avg = temps.reduce((sum, val) => sum + val, 0) / temps.length;

        return {
          month: new Date(0, i).toLocaleString(i18n.language, {
            month: "short",
          }),
          avgTemp: Math.round(avg),
        };
      });

      const grouped = {};
      forecast.data.list.forEach((e) => {
        const d = new Date(e.dt * 1000),
          day = d.toDateString(),
          h = d.getHours();
        if (
          !grouped[day] ||
          Math.abs(h - 12) < Math.abs(grouped[day].hour - 12)
        ) {
          grouped[day] = {
            day: d.toLocaleDateString(i18n.language, { weekday: "short" }),
            temp: Math.round(e.main.temp),
            icon: e.weather[0].main,
            hour: h,
          };
        }
      });
      const days = Object.values(grouped).slice(0, 5);
      const ext = [...days];
      while (ext.length < 11) {
        const base = days[ext.length % days.length];
        ext.push({ ...base, temp: base.temp + (Math.random() > 0.5 ? 1 : -1) });
      }

      const now = new Date();
      const result = {
        country,
        temp: current.data.main.temp,
        feelsLike: current.data.main.feels_like,
        tempMin: current.data.main.temp_min,
        tempMax: current.data.main.temp_max,
        description: current.data.weather[0].description,
        weekday: new Intl.DateTimeFormat(i18n.language, {
          weekday: "long",
        }).format(now),
        fullDate: new Intl.DateTimeFormat(i18n.language, {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(now),
        time: now.toLocaleTimeString(i18n.language, {
          hour: "2-digit",
          minute: "2-digit",
        }),
        hourlyData,
        forecast11Days: ext,
        monthlyAverages: monthlyAverageTemps,
      };

      setWeatherData(result);
    } catch (err) {
      console.error("Weather fetch error:", err);
    }
  };

  const handleCountryChange = async (e) => {
    setLoading(true);
    setSelectedCountry(e.target.value);
    await fetchWeather(e.target.value);
    setLoading(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "background.default",
        boxShadow: { xs: "none", sm: "0px 4px 10px 0px #00000026" },
        color: "text.primary",
        mb: 3,
        px: 2,
        py: 1,
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
          <Avatar src={cloudAvatar} sx={{ width: 58, height: 58, mr: 1 }} />
          <Typography
            variant="h6"
            fontWeight={400}
            fontSize={12}
            letterSpacing={0.15}
            lineHeight="150%"
            px={"8px"}
          >
            {t("weatherDashboard")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: 2,
            mt: { xs: 2, sm: 0 },
          }}
        >
          {loading ? (
            <CircularProgress size={24} />
          ) : (
            <FormControl variant="outlined" sx={{ width: 295 }}>
              <InputLabel id="location-select-label">
                {t("SearchYourLocation")}
              </InputLabel>
              <Select
                labelId="location-select-label"
                value={selectedCountry}
                label={t("searchYourLocation")}
                onChange={handleCountryChange}
                variant="outlined"
                size="small"
                sx={{ height: 40, bgcolor: "transparent" }}
              >
                {countries.map((c) => (
                  <MenuItem key={c.en} value={c.en}>
                    {i18n.language === "fa" ? c.fa : c.en}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <SettingsDropdown />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
