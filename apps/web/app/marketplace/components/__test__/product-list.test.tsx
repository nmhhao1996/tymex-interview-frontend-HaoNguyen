import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import ProductList from "../product-list";
import { useSearchParams } from "next/navigation";
import "@testing-library/jest-dom";

jest.mock("@tanstack/react-query", () => ({
  useInfiniteQuery: jest.fn(),
}));

jest.mock("../../../../services/product", () => ({
  getProducts: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("ProductList", () => {
  const mockUseInfiniteQuery = useInfiniteQuery as jest.Mock;
  const mockUseSearchParams = useSearchParams as jest.Mock;

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading skeleton when status is pending", () => {
    mockUseInfiniteQuery.mockReturnValue({
      status: "pending",
    });

    render(<ProductList />);
    expect(screen.getAllByTestId("prod-cart-skeleton")).toHaveLength(16);
  });

  it("renders error message when status is error", () => {
    mockUseInfiniteQuery.mockReturnValue({
      status: "error",
      refetch: jest.fn(),
    });

    render(<ProductList />);
    expect(screen.getByText(/Oops! Something went wrong./)).toBeInTheDocument();
  });

  it("renders product cards when data is available", () => {
    const mockData = {
      pages: [
        {
          items: [
            { id: 1, title: "Product 1", author: { avatar: "/image.png" } },
            { id: 2, title: "Product 2", author: { avatar: "/image.png" } },
          ],
          nextPage: 2,
        },
      ],
    };

    mockUseInfiniteQuery.mockReturnValue({
      data: mockData,
      status: "success",
      fetchNextPage: jest.fn(),
      hasNextPage: true,
      isFetchingNextPage: false,
    });

    render(<ProductList />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("calls fetchNextPage when 'View more' button is clicked", () => {
    const fetchNextPage = jest.fn();

    mockUseInfiniteQuery.mockReturnValue({
      data: {
        pages: [
          {
            items: [
              { id: 1, title: "Product 1", author: { avatar: "/image.png" } },
              { id: 2, title: "Product 2", author: { avatar: "/image.png" } },
            ],
            nextPage: 2,
          },
        ],
      },
      status: "success",
      fetchNextPage,
      hasNextPage: true,
      isFetchingNextPage: false,
    });

    render(<ProductList />);
    fireEvent.click(screen.getByText("View more"));
    expect(fetchNextPage).toHaveBeenCalled();
  });

  it("disables 'View more' button when fetching next page", () => {
    mockUseInfiniteQuery.mockReturnValue({
      data: {
        pages: [
          {
            items: [
              { id: 1, title: "Product 1", author: { avatar: "/image.png" } },
              { id: 2, title: "Product 2", author: { avatar: "/image.png" } },
            ],
            nextPage: 2,
          },
        ],
      },
      status: "success",
      fetchNextPage: jest.fn(),
      hasNextPage: true,
      isFetchingNextPage: true,
    });

    render(<ProductList />);
    expect(screen.getByTestId("view-more-button")).toBeDisabled();
  });
});
