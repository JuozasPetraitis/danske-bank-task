import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MobileMenu } from "../index";

describe("MobileMenu Component", () => {
  it("renders Mobile Menu component correctly", () => {
    render(
      <BrowserRouter>
        <MobileMenu />
      </BrowserRouter>,
    );

    const container = screen.getByTestId("mobile-menu-container");

    expect(container).toBeInTheDocument();
  });
});
