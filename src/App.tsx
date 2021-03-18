import React, { useState } from "react";

import TodoList, { TodoEntry } from "./TodoList";

const App: React.FC = () => {
  const [data, setData] = useState<TodoEntry[]>([]);

  const updateData = (data: TodoEntry[]): void => {
    setData(data);
  };

  return (
    <div>
      <TodoList setData={updateData} data={data} />
    </div>
  );
};

export default App;
