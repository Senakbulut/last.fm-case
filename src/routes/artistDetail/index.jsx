import { useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setAlbums, setTracks } from "state";
import AlbumTracks from "components/AlbumTracks/AlbumTracks";
import Navbar from "components/Navbar/Navbar";
import REACT_APP_API_KEY from "../../env";

const ArtistDetail = () => {
  const { artistName } = useParams();
  const artistsData = useSelector((state) => state.artists);
  const albumsData = useSelector((state) => state.albums);
  const tracksData = useSelector((state) => state.tracks);
  const dispatch = useDispatch();
  const artistKey = artistName.replace(/\W+/g, "").toLowerCase();

  const getTopAlbums = async () => {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistKey}&api_key=${REACT_APP_API_KEY}&format=json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setAlbums({ albums: data.topalbums.album }));
  };
  const getTopTracks = async () => {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistKey}&api_key=${REACT_APP_API_KEY}&format=json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setTracks({ tracks: data.toptracks.track }));
  };

  useEffect(() => {
    getTopAlbums();
    getTopTracks();
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: { xs: "24px", md: "60px" },
          width: "100%",
          background: (theme) => theme.palette.background.alt,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "2px solid",
            borderRadius: "8px",
            borderColor: (theme) => theme.palette.neutral.dark,
            padding: "16px 20px",
            "& img": {
              maxWidth: "80px",
              maxHeight: "80px",
              minWidth: "40px",
              minHeight: "40px",
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              border: "2px solid",
              borderColor: (theme) => theme.palette.neutral.dark,
            },
          }}
        >
          {artistsData.map(({ name, image, mbid }) => {
            var src;
            if (name === artistName) {
              image
                .filter((img) => img.size === "medium")
                .map((imageItem, i) => {
                  src = imageItem["#text"];
                });
              return <img src={src} alt="artist" key={mbid} />;
            }
          })}
          <Typography
            sx={{
              fontSize: (theme) => theme.typography.h5,
              fontWeight: 600,
              marginLeft: "20px",
              color: (theme) => theme.palette.neutral.header,
            }}
          >
            {artistName}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "40px", sm: "20px", md: "80px" },
            paddingTop: "16px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontSize: (theme) => theme.typography.h6,
                color: (theme) => theme.palette.neutral.header,
              }}
            >
              Top Albums
            </Typography>{" "}
            <Divider
              sx={{
                margin: "16px 0",
                borderColor: (theme) => theme.palette.neutral.medium,
              }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {albumsData.map(({ name, play, artist, image, url }) => (
                <AlbumTracks
                  name={name}
                  play={play}
                  image={image}
                  artist={artist}
                  key={url}
                />
              ))}
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontSize: (theme) => theme.typography.h6,
                color: (theme) => theme.palette.neutral.header,
              }}
            >
              Top Tracks
            </Typography>{" "}
            <Divider
              sx={{
                margin: "16px 0",
                borderColor: (theme) => theme.palette.neutral.medium,
              }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {tracksData.map(
                ({ name, play, artist, image, url, listeners }) => (
                  <AlbumTracks
                    name={name}
                    play={play}
                    image={image}
                    artist={artist}
                    listener={listeners}
                    key={url}
                    isTrack
                  />
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ArtistDetail;
