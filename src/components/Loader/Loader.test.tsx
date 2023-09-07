import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "../index";

describe("Loader Component", () => {
  it("renders Loader component correctly", () => {
    render(
      <BrowserRouter>
        <Loader />
      </BrowserRouter>,
    );

    const text = screen.getByTestId("loader-container");

    expect(text).toBeInTheDocument();
  });
});
