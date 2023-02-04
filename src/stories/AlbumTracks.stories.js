import AlbumTracks from "components/AlbumTracks/AlbumTracks";

export default {
  title: "AlbumTracksComponent",
  component: AlbumTracks,
};

export const Album = () => <AlbumTracks />;
export const Track = () => <AlbumTracks isTrack />;
