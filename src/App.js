import './App.css';
import Container from 'react-bootstrap/Container';
import Control from './components/Control';
import FormTask from './components/FormTask';
import ListTask from './components/ListTask';
import { useState } from 'react';

function App() {
  // Khởi tạo list task chứa các công việc
  const [listTask, setListTask] = useState([
    { taskId: 1, taskName: "Task 1", level: 1 },
    { taskId: 2, taskName: "Task 2", level: 2 },
    { taskId: 3, taskName: "Task 3", level: 3 }
  ]);
  const [task, setTask] = useState({});
  const [actionName, setActionName] = useState("");
  const handleAction = (task, actionName) => {
    setTask(task);
    setActionName(actionName);
  }
  return (
    <Container>
      <div className='header'>
        <h1>Project 02 - ToDo List <small>React Hook - UI</small></h1>
      </div>
      {/* Control - Start */}
      <Control />
      {/* Control - End */}
      {/* Form - Start */}
      <FormTask task={task} actionName={actionName} />
      {/* Form - End */}
      {/* List Task - Start */}
      <ListTask listTask={listTask} handleActionApp={handleAction} />
      {/* List Task - End */}

    </Container>
  );
}

export default App;
