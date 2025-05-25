import React, { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
export const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
          fontWeightBold: "400",
          fontSize: 14,
        },
        primary: {
          main: "#2196F3",
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "#F3FAFE",
                  paper: "#E1E9EE",
                },
                text: {
                  primary: "#003464",
                  light: "#000000",
                },
                pbg: {
                  primary: "#CDD9E0",
                },
                logInPaper: {
                  default: " #FFFFFF",
                },
              }
            : {
                background: {
                  default: "#151D32",
                  paper: "#292F45",
                },
                text: {
                  primary: "#F3F4F7",
                  light: "#F3F4F7",
                },
                pbg: {
                  primary: "#3F4861",
                },
                logInPaper: {
                  default: "#292F45",
                },
              }),
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
