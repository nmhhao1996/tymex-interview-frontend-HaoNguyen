import { render, screen, fireEvent } from "@testing-library/react";
import ProductFilterDrawer from "../product-filter-drawer";
import { useFilterData } from "../product-filter/hooks";
import "@testing-library/jest-dom";

jest.mock("../product-filter/hooks", () => ({
  useFilterData: jest.fn(),
}));

// eslint-disable-next-line react/display-name
jest.mock("../product-filter", () => () => <div>ProductFilter</div>);

describe("ProductFilterDrawer", () => {
  beforeEach(() => {
    (useFilterData as jest.Mock).mockReturnValue({ hasFilter: false });
  });

  it("should render the filter button", () => {
    render(<ProductFilterDrawer />);
    expect(screen.getByTestId("filter-button")).toBeInTheDocument();
  });

  it("should open the drawer when the button is clicked", () => {
    render(<ProductFilterDrawer />);
    const button = screen.getByTestId("filter-button");
    fireEvent.click(button);
    expect(screen.getByTestId("close-button")).toBeInTheDocument();
  });

  it("should show the filter indicator when hasFilter is true", () => {
    (useFilterData as jest.Mock).mockReturnValue({ hasFilter: true });
    render(<ProductFilterDrawer />);
    expect(screen.getByTestId('ping')).toBeInTheDocument();
  });
});
