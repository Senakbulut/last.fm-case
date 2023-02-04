import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  artists: [],
  albums: [],
  tracks: [],
};

export const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setArtists: (state, action) => {
      if (state.artists) {
        state.artists = action.payload.artists;
      } else {
        console.error("Cannot found artists.");
      }
    },
    setAlbums: (state, action) => {
      if (state.albums) {
        state.albums = action.payload.albums;
      } else {
        console.error("Cannot found albums.");
      }
    },
    setTracks: (state, action) => {
      if (state.tracks) {
        state.tracks = action.payload.tracks;
      } else {
        console.error("Cannot found tracks.");
      }
    },
  },
});

export const { setMode, setArtists, setAlbums, setTracks } =
  artistsSlice.actions;
export default artistsSlice.reducer;
