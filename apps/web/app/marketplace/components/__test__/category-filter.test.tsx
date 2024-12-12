import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../category-filter";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import "@testing-library/jest-dom";
import { Category } from "../../../../models";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("CategoryFilter", () => {
  const mockPush = jest.fn();
  const mockUseRouter = useRouter as jest.Mock;
  const mockUsePathname = usePathname as jest.Mock;
  const mockUseSearchParams = useSearchParams as jest.Mock;

  beforeEach(() => {
    mockUseRouter.mockReturnValue({ push: mockPush });
    mockUsePathname.mockReturnValue("/marketplace");
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all category buttons", () => {
    render(<CategoryFilter />);
    expect(screen.getByText("All")).toBeInTheDocument();
    Object.values(Category).forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it("disables the 'All' button when no category is selected", () => {
    render(<CategoryFilter />);
    expect(screen.getByText("All")).toBeDisabled();
  });

  it("enables the 'All' button when a category is selected", () => {
    const searchParams = new URLSearchParams();
    searchParams.set("category", Object.values(Category)[0] as string);
    mockUseSearchParams.mockReturnValue(searchParams);
    render(<CategoryFilter />);
    expect(screen.getByText("All")).not.toBeDisabled();
  });

  it("disables the selected category button", () => {
    const selectedCategory = Object.values(Category)[0];
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams(`category=${selectedCategory}`)
    );
    render(<CategoryFilter />);
    expect(screen.getByText(selectedCategory as string)).toBeDisabled();
  });

  it("calls router.push with correct params when a category is clicked", () => {
    render(<CategoryFilter />);
    const categoryButton = screen.getByText(
      Object.values(Category)[0] as string
    );
    fireEvent.click(categoryButton);
    const searchParams = new URLSearchParams();
    searchParams.set("category", Object.values(Category)[0] as string);
    expect(mockPush).toHaveBeenCalledWith(
      "/marketplace?" + searchParams.toString(),
      {
        scroll: false,
      }
    );
  });

  it("calls router.push with correct params when 'All' is clicked", () => {
    const searchParams = new URLSearchParams();
    searchParams.set("category", Object.values(Category)[0] as string);
    mockUseSearchParams.mockReturnValue(searchParams);
    render(<CategoryFilter />);
    const allButton = screen.getByText("All");
    fireEvent.click(allButton);
    expect(mockPush).toHaveBeenCalledWith("/marketplace", { scroll: false });
  });
});
