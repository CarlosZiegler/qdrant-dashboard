import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("Simple test", async (context) => {
    render(<App />);
    const linkElement = screen.getByText(/Console/i);
    expect(linkElement).toBeDefined();
  });
});
