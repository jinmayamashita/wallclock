import { renderHook, act } from "@testing-library/react-hooks";
import { useQuery } from "../useQuery";
import routeData from "react-router";

const mockLocation = {
  search: "color=#333&bg=#fff"
};

describe("hooks/useQuery", () => {
  beforeEach(() => {
    jest.spyOn(routeData, "useLocation").mockReturnValue(mockLocation);
  });

  it("should be get queries", () => {
    const { result } = renderHook(() => useQuery());
    expect(result.current.get("color")).toBe("#333");
    expect(result.current.get("bg")).toBe("#fff");
  });
});
