import App from "../App";
import { render, screen } from "@testing-library/react";

it("should render header", () => {
  render(<App />);
  const header = screen.queryByText(/Lista/);
  expect(header).toBeInTheDocument();
});
