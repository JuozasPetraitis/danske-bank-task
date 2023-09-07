import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/reduxProvider";

describe("App Component", () => {
  it("renders App and checks if text is correct", () => {
    renderWithProviders(<App />);

    const routerComponent = screen.getByTestId("router");

    expect(routerComponent).toBeInTheDocument();
  });
});
