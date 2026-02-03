import { render, screen } from "@testing-library/react";
import Post from "./Post";

describe("post component", () => {
  it("render title and body", () => {
    render(<Post title={"title text"} body={"body text"} />);
    expect(screen.getByText("title text")).toBeInTheDocument();
    expect(screen.getByText("body text")).toBeInTheDocument();
  });
});
