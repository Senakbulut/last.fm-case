import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import { colorTokens } from "theme";

const AlbumTracks = ({
  isTrack = false,
  name = "Album Name",
  artist = {
    name: "Artist",
    url: "https://www.last.fm/music/TheWeekend",
  },
  play = "3816947",
  listener = "685160",
  image = [
    {
      "#text":
        "https://lastfm.freetls.fastly.net/i/u/64s/9dcae165f522e0d818f7e75a3b5b6e16.png",
      size: "medium",
    },
  ],
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid",
        borderColor:
          theme.palette.mode === "dark"
            ? colorTokens.primary[100]
            : colorTokens.primary[700],
        padding: "24px 16px",
        gap: { xs: "8px", md: "24px" },
        maxWidth: { xs: "100%", md: "50vw" },
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          "& img": {
            width: { xs: "50px", md: "60px" },
            height: { xs: "50px", md: "60px" },
            borderRadius: "8px",
            border: "2px solid",
            borderColor:
              theme.palette.mode === "dark"
                ? colorTokens.primary[100]
                : colorTokens.primary[700],
          },
        }}
      >
        {image
          .filter((image) => image.size === "medium")
          .map((imageItem, i) => (
            <Box key={i}>
              {imageItem["#text"] === "" ? (
                <img src="https://via.placeholder.com/60" alt="album" />
              ) : (
                <img src={imageItem["#text"]} alt="album" />
              )}
            </Box>
          ))}
        <Box sx={{ padding: "0 16px" }}>
          <Tooltip title={name}>
            <Typography
              sx={{
                marginBottom: "4px",
                fontSize: "12px",
                fontWeight: "500",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: { xs: "100px", sm: "60px", md: "100px" },
                cursor: "pointer",
                color:
                  theme.palette.mode === "dark"
                    ? colorTokens.primary[10]
                    : colorTokens.primary[1000],
              }}
            >
              {name}
            </Typography>
          </Tooltip>
          <Typography
            sx={{
              marginTop: "4px",
              fontSize: "10px",
              color:
                theme.palette.mode === "dark"
                  ? colorTokens.primary[200]
                  : colorTokens.primary[700],
            }}
          >
            {artist.name}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%", textAlign: "end" }}>
        {isTrack && (
          <Typography
            className="isTrack"
            sx={{
              marginBottom: "8px",
              fontSize: { xs: "10px", md: "12px" },
              fontWeight: 300,
              color:
                theme.palette.mode === "dark"
                  ? colorTokens.primary[10]
                  : colorTokens.primary[1000],
            }}
          >
            {listener} listeners
          </Typography>
        )}
        <Typography
          sx={{
            marginBottom: "12px",
            fontSize: { xs: "10px", md: "12px" },
            fontWeight: 300,
            color:
              theme.palette.mode === "dark"
                ? colorTokens.primary[10]
                : colorTokens.primary[1000],
          }}
        >
          {play} play
        </Typography>
      </Box>
    </Box>
  );
};

export default AlbumTracks;
