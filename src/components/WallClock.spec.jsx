// @flow
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { WallClock } from "./WallClock";
import { MemoryRouter } from "react-router-dom";

describe("components/WallClock", () => {
  const Component = () => (
    <MemoryRouter>
      <WallClock />
    </MemoryRouter>
  );
  describe("default", () => {
    it("should be render", () => {
      const { getAllByText } = render(<Component />);
      expect(getAllByText(/\d/)).toHaveLength(3);
    });
  });
});
