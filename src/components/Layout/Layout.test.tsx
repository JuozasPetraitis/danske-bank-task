import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "../index";

describe("Layout Component", () => {
  it("renders Layout component correctly", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );

    const container = screen.getByTestId("layout-container");

    expect(container).toBeInTheDocument();
  });
});
