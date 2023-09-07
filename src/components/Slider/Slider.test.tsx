import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Slider } from "../index";
import { renderWithProviders } from "../../utils/reduxProvider";

describe("Slider component", () => {
  it("renders Slider component correctly", () => {
    renderWithProviders(
      <BrowserRouter>
        <Slider />
      </BrowserRouter>,
    );

    const container = screen.getByTestId("slider-container");

    expect(container).toBeInTheDocument();
  });
});
