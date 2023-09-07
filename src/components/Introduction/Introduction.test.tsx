import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Introduction from "./Introduction";
import { expect } from "vitest";

vi.mock("react-router-dom", async () => {
  const originalModule = await import("react-router-dom");

  return {
    ...originalModule,
    useOutletContext: () => ({
      isMobileMenuOpen: false,
      isMobileMenuOpenHandler: vi.fn(),
    }),
  };
});

describe("Introduction Component", () => {
  it("renders the Introduction component correctly", () => {
    render(
      <BrowserRouter>
        <Introduction />
      </BrowserRouter>,
    );

    const titleElement = screen.getByText("Welcome to Stars Wars Universe!");
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(
      "Are you ready to embark on an intergalactic journey to explore the iconic Star Wars universe?",
    );
    expect(descriptionElement).toBeInTheDocument();

    const buttonElement = screen.getByText("Get started");
    expect(buttonElement).toBeInTheDocument();
  });
});
