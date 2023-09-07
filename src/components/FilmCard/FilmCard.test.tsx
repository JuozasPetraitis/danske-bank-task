import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FilmCard from "./FilmCard";
import { renderWithProviders } from "../../utils/reduxProvider";

describe("Film Card Component", () => {
  test("renders Film Card component correctly", () => {
    const film = {
      id: 1,
      title: "A New Hope",
      episode_id: 1,
      opening_crawl: "Crawl",
      director: "Director",
      producer: "Director",
      release_date: "Director",
      species: [],
      starships: [],
      vehicles: [],
      characters: [],
      planets: [],
      created: "Director",
      edited: "Director",
      url: "Director",
    };

    renderWithProviders(
      <BrowserRouter>
        <FilmCard film={film} />
      </BrowserRouter>,
    );

    const title = screen.getByTestId("film-title-paragraph");

    expect(title).toBeInTheDocument();
  });
});
