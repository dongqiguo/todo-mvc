import React, { useMemo, useState } from "react";

import TodoItem, { TodoEntry } from "../TodoItem";
import "./TodoList.css";

type Props = {
  data: TodoEntry[];
  setData?: (data: TodoEntry[]) => void;
};

const TodoList: React.FC<Props> = (props) => {
  const { data, setData } = props;
  const [text, setText] = useState("");

  const totalCnt = useMemo(() => {
    return data.length;
  }, [data.length]);

  /**
   * Returns a function that modifies the state property of ItemAttr
   * @param item
   */
  const getItemUpdateFn = (item: TodoEntry): ((isDone: boolean) => void) => (
    isDone: boolean
  ): void => {
    setData?.(
      Array.from(
        data.map((v) =>
          v.value === item.value
            ? { state: isDone, value: v.value, id: v.id }
            : v
        )
      )
    );
  };

  const addTodoItem = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && text) {
      const newTodo: TodoEntry = {
        state: false,
        value: text,
        id: new Date().getTime(),
      };
      setData?.([newTodo, ...data]);
      setText("");
    }
  };

  const removeTodoItem = (id: number): void => {
    const newTodoList = data.filter((v) => v.id != id);
    setData?.(newTodoList);
  };

  return (
    <div className="todo-list" data-testid="todo-list">
      <input
        className="todo-input"
        placeholder="Enter what you want to do and enter to add"
        type="text"
        onChange={(e) => setText(e.target.value)}
        onKeyPress={addTodoItem}
        value={text}
      />
      <p data-testid="total-count">共{totalCnt}条</p>
      {data.map((v: TodoEntry) => (
        <div key={v.value}>
          <TodoItem
            entry={v}
            onChange={getItemUpdateFn(v)}
            onRemove={removeTodoItem}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
