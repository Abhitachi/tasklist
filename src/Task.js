import React from "react";

const Task = ({ tasks, onIncreaseHour, onDecreaseHour }) => {
  console.log(tasks);

  return (
    <div className="tasklist">
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <p className="subject">
            {task.subject} - {task.time} hours
          </p>

          <div className="btns">
            {" "}
            <button
              className=" increment"
              onClick={() => onIncreaseHour(index)}
            >
              +
            </button>
            <button
              className=" decrement"
              onClick={() => onDecreaseHour(index)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
