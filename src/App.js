import { useRef, useState } from "react";
import Task from "./Task";

function App() {
  const [taskList, setTaskList] = useState([]);

  const task = useRef(null);
  const hour = useRef(null);

  const handleClick = (e) => {
    if (task.current.value === "") return;
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        subject: task.current.value,
        time: hour.current.value ? hour.current.value : 0,
      },
    ]);
    task.current.value = "";
    hour.current.value = "";
  };

  const onIncreaseHour = (index) => {
    setTaskList(
      taskList.map((item, idx) => {
        if (idx === index) {
          return { ...item, time: parseInt(item.time) + 1 };
        } else {
          return item;
        }
      })
    );
  };

  const onDecreaseHour = (index) => {
    setTaskList(
      taskList.map((item, idx) => {
        if (idx === index) {
          return { ...item, time: parseInt(item.time) - 1 };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="main">
      <header>
        <h1 className="heading">GeekSter Educational Planner</h1>
      </header>
      <div>
        <form className="form">
          <input className="sub" type="text" ref={task} required />
          <input
            className="hour"
            type="number"
            ref={hour}
            step={1}
            min={0}
            required
            placeholder="hours"
          />
          <button className="btn" onClick={handleClick}>
            Add
          </button>
        </form>
      </div>

      <Task
        tasks={taskList}
        onIncreaseHour={onIncreaseHour}
        onDecreaseHour={onDecreaseHour}
      />
    </div>
  );
}

export default App;
