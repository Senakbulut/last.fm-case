// color design tokens export
export const colorTokens = {
  primary: {
    0: "#FFFFFF",
    10: "#EAFDF9",
    100: "#9BD1C5",
    200: "#81B5AA",
    300: "linear-gradient(90deg, rgba(101,181,152,1), rgba(198,251,218,1));",
    500: "#669A90",
    700: "#4D8076",
    800: "linear-gradient(to right, rgb(9, 54, 55), rgb(68, 160, 141))",
    1000: "#000000",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            neutral: {
              dark: colorTokens.primary[0],
              main: colorTokens.primary[200],
              header: colorTokens.primary[10],
            },
            background: {
              alt: colorTokens.primary[800],
            },
          }
        : {
            // palette values for light mode
            neutral: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              header: colorTokens.primary[1000],
            },
            background: {
              alt: colorTokens.primary[300],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
