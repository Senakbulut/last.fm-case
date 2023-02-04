import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AlbumTracks from "./AlbumTracks";

test("Albumtracks image render correctly", () => {
  render(<AlbumTracks />);
  const image = screen.getByAltText("album");
  expect(image).toBeInTheDocument();
});
test("Albumtracks name prop render correctly", () => {
  render(<AlbumTracks name="Album" />);
  const name = screen.getByText("Album");
  expect(name).toBeInTheDocument();
});
test("Albumtracks comp is isTrack prop render correctly", () => {
  const { container } = render(<AlbumTracks isTrack />);
  expect(container.querySelector(".isTrack")).toBeInTheDocument();
});
