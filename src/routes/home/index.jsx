import { useEffect } from "react";
import { Box, Link, Typography } from "@mui/material";
import ArtistList from "components/ArtistListComponent/ArtistListComponent";
import { useSelector, useDispatch } from "react-redux";
import { setArtists } from "state";
import { colorTokens } from "theme";
import Navbar from "components/Navbar/Navbar";
import REACT_APP_API_KEY from "../../env";

const HomePage = () => {
  const dispatch = useDispatch();
  const artistsData = useSelector((state) => state.artists);

  const getTopArtists = async () => {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${REACT_APP_API_KEY}&format=json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setArtists({ artists: data.artists.artist }));
  };

  useEffect(() => {
    getTopArtists();
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: "24px",
          background: (theme) => theme.palette.background.alt,
        }}
      >
        <Typography
          sx={{
            fontSize: (theme) => theme.typography.h4,
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "30px",
            color: (theme) => theme.palette.neutral.header,
          }}
        >
          Top Artist List
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {artistsData.map(({ name, playcount, listeners, image, url }) => (
            <Link
              href={`/${name}`}
              style={{
                color: colorTokens.primary[1000],
                textDecoration: "none",
              }}
              key={url}
            >
              <ArtistList
                name={name}
                playcount={playcount}
                listeners={listeners}
                img={image}
              />
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
