import React, { useState, useEffect } from "react";

type Task = {
  id: number;
  text: string;
};

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput("");
  };

  const removeTask = (id: number) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div>
      <h2>Task Manager</h2>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="New task" />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
