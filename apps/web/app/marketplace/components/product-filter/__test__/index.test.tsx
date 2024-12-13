import { render, screen, fireEvent } from "@testing-library/react";
import ProductFilter from "../index";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";
import { useFilterData } from "../hooks";

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

jest.mock("../../../../../services/product", () => ({
  getMaxPrice: jest.fn(),
}));

jest.mock("../../../../../lib/query-string", () => ({
  parse: jest.fn(),
  stringify: jest.fn(),
}));

jest.mock("../hooks", () => ({
  useFilterData: jest.fn(() => ({
    filter: {},
    hasFilter: false,
  })),
}));

describe("ProductFilter", () => {
  const mockUseQuery = useQuery as jest.Mock;
  const mockUseRouter = useRouter as jest.Mock;
  const mockUseFilterData = useFilterData as jest.Mock;

  beforeEach(() => {
    mockUseQuery.mockReturnValue({
      data: 100,
    });

    mockUseRouter.mockReturnValue({
      push: jest.fn(),
    });

    mockUseFilterData.mockReturnValue({
      filter: {},
      hasFilter: false,
    });
  });

  it("renders the search input", () => {
    render(<ProductFilter />);
    expect(screen.getByPlaceholderText("Quick search")).toBeInTheDocument();
  });

  it("renders the price slider when maxPrice is defined", () => {
    render(<ProductFilter />);
    expect(screen.getByTestId("price-slider")).toBeInTheDocument();
  });

  it("renders the tier select", () => {
    render(<ProductFilter />);
    expect(screen.getByText("TIER")).toBeInTheDocument();
  });

  it("renders the theme select", () => {
    render(<ProductFilter />);
    expect(screen.getByText("THEME")).toBeInTheDocument();
  });

  it("renders the time sort select", () => {
    render(<ProductFilter />);
    expect(screen.getByText("TIME")).toBeInTheDocument();
  });

  it("renders the price sort select", () => {
    render(<ProductFilter />);
    expect(screen.getByTestId("price-sorter")).toBeInTheDocument();
  });

  it("calls reset when the reset button is clicked", () => {
    mockUseFilterData.mockReturnValue({
      filter: {
        q: "test",
      },
      hasFilter: true,
    });

    const onFilterChange = jest.fn();
    render(<ProductFilter onFilterChange={onFilterChange} />);
    fireEvent.click(screen.getByText("Reset filter"));
    expect(onFilterChange).toHaveBeenCalledWith();
  });
});
