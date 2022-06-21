import { render, screen } from "@testing-library/react";

import CartItem from "./CartItem";

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
  });
});
