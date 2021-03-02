import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import TodoItem, { TodoEntry } from "./TodoItem";

describe("TodoItem", () => {
  describe("initialize", () => {
    it("click checkbox of todoItem if state attribute is false , onChange should be called with true", () => {
      const mockEntry: TodoEntry = { id: 1, value: "111", state: false };
      const mockOnChange = jest.fn();

      const { queryByTestId } = render(
        <TodoItem entry={mockEntry} onChange={mockOnChange} />
      );
      const todoItem = queryByTestId(mockEntry.id)?.getElementsByTagName(
        "input"
      )[0] as HTMLElement;
      userEvent.click(todoItem);

      expect(mockOnChange).toBeCalledWith(true);
    });

    it("click remove icon, onRemove should be called with id ", () => {
      const mockEntry: TodoEntry = { id: 1, value: "111", state: false };
      const mockOnRemove = jest.fn();

      const { queryByTestId } = render(
        <TodoItem entry={mockEntry} onRemove={mockOnRemove} />
      );
      const removeBtn = queryByTestId(mockEntry.id)?.getElementsByClassName(
        "todo-item-remove"
      )[0] as HTMLElement;
      userEvent.click(removeBtn);

      expect(mockOnRemove).toBeCalledWith(mockEntry.id);
    });
  });
});
