import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "../index";

describe("Sidebar Component", () => {
  it("renders Sidebar component correctly", () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );

    const container = screen.getByTestId("sidebar-container");

    expect(container).toBeInTheDocument();
  });
});
