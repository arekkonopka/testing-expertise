import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const MockApp = () => (
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>
);

it("should render header", () => {
  render(<MockApp />);
  const header = screen.queryByText(/Lista/);
  expect(header).toBeInTheDocument();
});
