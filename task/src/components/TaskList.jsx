import { useState } from 'react';

import { ListGroup, Button } from 'react-bootstrap';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';


function TaskList(props) {
    const {tasklist}=props
    const [tasks, setTasks] = useState([]); // Utilisez useState pour gérer les tâches
  
    const addTask = (newTask) => {
      setTasks([...tasks, newTask]); // Réceptionne de nouveaux ajouts de tâches et les intègre à la liste
    };
  
    const updateTaskStatus = (taskId, completed) => {
      // Gère les modifications de statut (terminé ou non)
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed } : task
        )
      );
    };
  
    const deleteTask = (taskId) => {
      // Gère les demandes de suppression des tâches
      setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="container bg-dark text-white ">
            <TaskForm addTask={addTask} />
          <h1 className="mb-4">Task List</h1>
          <ListGroup>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                addTask={addTask}
                updateTaskStatus={updateTaskStatus}
                deleteTask={deleteTask}
              />
            ))}
          </ListGroup>
        </div>
      );
    }


    export default TaskList;


// function TaskList() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (newTask) => {
//     setTasks([...tasks, newTask]);
//   };

//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   return (
//     <div>
//       <h1>Task List</h1>
//       <TaskForm addTask={addTask} />
//       {tasks.map((task) => (
//         <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
//       ))}
//     </div>
//   );
// }

//export default TaskList;





  


