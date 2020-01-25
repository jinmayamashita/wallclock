// @flow
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { WallClockNumber } from "./WallClockNumber";

describe("components/WallClockNumber", () => {
  describe("default", () => {
    it("should be render", () => {
      const { getByText } = render(<WallClockNumber number={"10"}/>);
      expect(getByText(/\d/).textContent).toBe("10")
    });
  });
});
