import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import ChartsDataStore from "./store/ChartsDataStore";
import App from "./App";

describe("App Component", () => {
  test("renders title correctly", () => {
    render(
      <Provider store={ChartsDataStore}>
        <App />
      </Provider>
    );
    expect(screen.getByText("E-Commerce Dashboard")).toBeInTheDocument();
  });

  test("renders DashboardCards components", () => {
    render(
      <Provider store={ChartsDataStore}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/Company Profit in \d{4}/i)).toBeInTheDocument();
    expect(screen.getByText(/Star Product of \d{4} is/i)).toBeInTheDocument();
    expect(screen.getByText(/Highest Users from/i)).toBeInTheDocument();
    expect(screen.getByText(/Profit % in \d{4}/i)).toBeInTheDocument();
  });
});
