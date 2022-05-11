import React, { useState } from "react";

import TodoList, { TodoEntry } from "./TodoList";

const App: React.FunctionComponent = (): JSX.Element => {
  const [data, setData] = useState<TodoEntry[]>([]);

  const updateData = (data: TodoEntry[]): void => {
    setData(data);
    console.log(data);
    console.log(111);
    console.log('staging');
    console.log('staging');
  };

  return (
    <div>
      <TodoList setData={updateData} data={data} />
    </div>
  );
};

export default App;
