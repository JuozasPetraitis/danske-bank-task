import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  const mockSetIsMobileMenuOpen = vi.fn();

  it("renders Header component with the correct title", () => {
    render(
      <BrowserRouter>
        <Header
          isMobileMenuOpen={false}
          setIsMobileMenuOpen={mockSetIsMobileMenuOpen}
        />
      </BrowserRouter>,
    );

    const title = screen.getByText("Star Wars");
    expect(title).toBeInTheDocument();
  });

  it("renders Header component and calls setIsMobileMenuOpen when button clicked", () => {
    render(
      <BrowserRouter>
        <Header
          isMobileMenuOpen={false}
          setIsMobileMenuOpen={mockSetIsMobileMenuOpen}
        />
      </BrowserRouter>,
    );

    const button = screen.getByTestId("hamburger-button");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockSetIsMobileMenuOpen).toHaveBeenCalled();
  });
});
