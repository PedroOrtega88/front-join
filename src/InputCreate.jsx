import React, { useState } from "react";

const InputCreate = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = () => {
    if (taskInput.trim() !== "") {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Introduce una nueva tarea"
        value={taskInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Añadir tarea</button>
    </div>
  );
};

export default InputCreate;
