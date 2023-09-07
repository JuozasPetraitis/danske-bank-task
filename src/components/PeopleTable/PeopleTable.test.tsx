import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PeopleTable } from "../index";
import { renderWithProviders } from "../../utils/reduxProvider";

describe("PeopleTable Component", () => {
  it("renders PeopleTable component and checks if it exists", () => {
    const film = {
      id: 1,
      title: "Test",
      episode_id: 1,
      opening_crawl: "Test",
      director: "Test",
      producer: "Test",
      release_date: "Test",
      species: [],
      starships: [],
      vehicles: [],
      characters: [],
      planets: [],
      created: "Test",
      edited: "Test",
      url: "Test",
    };

    renderWithProviders(
      <BrowserRouter>
        <PeopleTable />
      </BrowserRouter>,
      {
        preloadedState: {
          people: { people: [], loading: false, error: null },
          film: {
            film: { film: film, loading: false, error: null },
            films: { films: [], loading: false, error: null },
          },
        },
      },
    );

    const container = screen.getByTestId("people-table-container");

    expect(container).toBeInTheDocument();
  });
});
