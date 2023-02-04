import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import ArtistList from "./ArtistListComponent";

test("ArtistList image render correctly", () => {
  render(<ArtistList />);
  const image = screen.getByAltText("artist");
  expect(image).toBeInTheDocument();
});
test("ArtistList name prop render correctly", () => {
    render(<ArtistList />);
    const artistSection = screen.getByText("Artist");
    expect(artistSection).toBeInTheDocument();
  });