import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import TodoList from "./TodoList";
import { TodoEntry } from "../TodoItem";

describe("TodoList", () => {
  describe("initialize", () => {
    const mockData: TodoEntry[] = [{ id: 11, value: "222", state: false }];

    it("the number of should be the same as the number of data ", () => {
      const { queryByTestId } = render(<TodoList data={mockData} />);

      expect(
        queryByTestId("todo-list")?.getElementsByTagName("input").length
      ).toBe(mockData.length + 1);
    });
    it("The value of totalCnt should be the same as the length of data", () => {
      const { queryByTestId } = render(<TodoList data={mockData} />);

      expect(queryByTestId("total-count")?.textContent).toBe(
        `共${mockData.length}条`
      );
    });
  });
});
