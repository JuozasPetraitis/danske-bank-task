import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders Footer component correctly", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    const text = screen.getByText(
      `Copyright © ${new Date().getFullYear()} Star Wars Inc.`,
    );

    expect(text).toBeInTheDocument();
  });
});
