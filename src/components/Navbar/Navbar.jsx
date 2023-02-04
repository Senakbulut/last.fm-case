import React from "react";
import { Box, useTheme, IconButton, Typography } from "@mui/material";
import { setMode } from "state";
import { useDispatch } from "react-redux";
import { DarkMode, LightMode } from "@mui/icons-material";

export const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        background: (theme) => theme.palette.background.alt,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <Typography
        sx={{
          fontSize: (theme) => theme.typography.h2,
          color: (theme) => theme.palette.neutral.header,
          fontWeight: 700,
        }}
      >
        Last.fm
      </Typography>
      <IconButton onClick={() => dispatch(setMode())}>
        {theme.palette.mode === "dark" ? (
          <DarkMode sx={{ fontSize: (theme) => theme.typography.h3 }} />
        ) : (
          <LightMode
            sx={{
              color: (theme) => theme.palette.neutral.header,
              fontSize: (theme) => theme.typography.h3,
            }}
          />
        )}
      </IconButton>
    </Box>
  );
};

export default Navbar;
