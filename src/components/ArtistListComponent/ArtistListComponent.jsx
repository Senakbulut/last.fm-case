import { Box, Divider, Typography, useTheme } from "@mui/material";
import { colorTokens } from "theme";

const ArtistList = ({
  name = "Artist Name",
  img = [
    {
      "#text":
        "https://lastfm.freetls.fastly.net/i/u/64s/3b54885952161aaea4ce2965b2db1638.png",
      size: "medium",
    },
  ],
  playcount = "131231",
  listeners = "123626273",
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "2px solid",
        borderColor:
          theme.palette.mode === "dark"
            ? colorTokens.primary[100]
            : colorTokens.primary[700],
        padding: "24px 32px",
        gap: "24px",
        maxWidth: { xs: "100%", md: "50vw" },
        margin: "0 auto",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          "& img": {
            width: { xs: "50px", sm: "60px", md: "80px" },
            height: { xs: "50px", sm: "60px", md: "80px" },
            borderRadius: "8px",
            border: "2px solid",
            borderColor:
              theme.palette.mode === "dark"
                ? colorTokens.primary[100]
                : colorTokens.primary[700],
          },
        }}
      >
        {img
          .filter((image) => image.size === "medium")
          .map((imageItem, i) => (
            <img src={imageItem["#text"]} alt="artist" key={i} />
          ))}

        <Box sx={{ padding: "0 16px" }}>
          <Typography
            sx={{
              marginBottom: "4px",
              fontSize:{
                xs: "12px",
                sm: "14px",
              },
              color:
                theme.palette.mode === "dark"
                  ? colorTokens.primary[10]
                  : colorTokens.primary[800],
            }}
          >
            Artist
          </Typography>
          <Divider
            sx={{
              borderBottomWidth: "unset",
              borderColor:
                theme.palette.mode === "dark"
                  ? colorTokens.primary[10]
                  : colorTokens.primary[800],
            }}
          />
          <Typography
            sx={{
              marginTop: "8px",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "600",
              color:
                theme.palette.mode === "dark"
                  ? colorTokens.primary[10]
                  : colorTokens.primary[800],
            }}
          >
            {name}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%", textAlign: "end" }}>
        <Typography
          sx={{
            marginBottom: "12px",
            fontSize: { xs: "10px", sm: "12px" },
            fontWeight: 300,
            color:
              theme.palette.mode === "dark"
                ? colorTokens.primary[10]
                : colorTokens.primary[800],
          }}
        >
          listeners: {listeners}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "12px" },
            fontWeight: 300,
            color:
              theme.palette.mode === "dark"
                ? colorTokens.primary[10]
                : colorTokens.primary[800],
          }}
        >
          playcount: {playcount}
        </Typography>
      </Box>
    </Box>
  );
};

export default ArtistList;
