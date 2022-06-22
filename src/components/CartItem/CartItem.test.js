import { render, screen } from "@testing-library/react";

import CartItem from "./CartItem";

//NOTE: learn different assertions and selectors
describe("CartItem", () => {
  it("should display remove button", () => {
    const props = {
      id: 12,
      title: "test",
      image: "/test/img-1.png",
      price: 12,
    };
    render(<CartItem {...props} />);

    const button = screen.getByRole("button", { name: "Remove" });
    expect(button).toBeInTheDocument();

    const button2 = screen.getByRole("button");
    expect(button2).toHaveTextContent("Remove");

    const button3 = screen.getByTestId("remove-button");
    expect(button3).toBeVisible();
  });

  it("should match the snapshot", () => {
    const props = {
      id: 12,
      title: "test",
      image: "/test/img-1.png",
      price: 12,
    };
    const { asFragment } = render(<CartItem {...props} />);

    expect(asFragment(<CartItem {...props} />)).toMatchSnapshot();
  });

  it("should", () => {
    const props = {
      id: 12,
      title: "test",
      image: "/test/img-1.png",
      price: 12,
    };
    const { container, getByTestId } = render(<CartItem {...props} />);

    console.log(container.firstChild);

    expect(getByTestId("remove-button")).toBeInTheDocument();
  });
});
