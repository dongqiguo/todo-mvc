import React, { useMemo } from "react";

import "./TodoItem.css";

/**
 * @param {any}  value - text of TodoItem.
 * @param {boolean} state - true means completed and false means not.
 * @param {number} id - Unique identification of data by the timestamp
 */
export type TodoEntry = {
  value?: string | number;
  state: boolean;
  id: number;
};

/**
 * @param {Option}    option - options
 * @param {Function}  onChange - change state value of option
 */
type Props = {
  entry: TodoEntry;
  onChange?: (state: boolean) => void;
  onRemove?: (id: number) => void;
};

const TodoItem: React.FC<Props> = (props) => {
  const { entry, onChange, onRemove } = props;
  const { value = "", state = false, id = 0 } = entry;

  const complete = useMemo(() => (state ? "todo-item-complete" : ""), [
    entry.state,
  ]);

  return (
    <div className="todo-item" data-testid={id}>
      <input
        type="checkbox"
        checked={state}
        onChange={() => onChange?.(!state)}
      />
      <label className={complete}>{value}</label>
      <div className="todo-item-remove" onClick={() => onRemove?.(id)}>
        X
      </div>
    </div>
  );
};

export default TodoItem;
