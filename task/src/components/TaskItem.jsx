import React from 'react';
import { ListGroupItem, Button } from 'react-bootstrap'; // Importez les composants ListGroupItem et Button de React-Bootstrap

function TaskItem({ task, updateTaskStatus, deleteTask }) {
  const handleStatusChange = () => {
    updateTaskStatus(task.id, !task.completed); // Inverse le statut de complétion
  };

  return (
    <ListGroupItem className="d-flex justify-between align-items-center">
     <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Date: {task.date}</p>
      <p>Statut: {task.completed ? 'Terminé' : 'Non terminé'}</p>
      </div>
      <div>
      <Button
        variant={task.completed ? "outline-success" : "success"}
        onClick={handleStatusChange}
        className="me-2"
      >
        {task.completed ? 'Marquer comme non terminé' : 'Marquer comme terminé'}
      </Button>
      <Button variant="danger" onClick={() => deleteTask(task.id)}>
        Supprimer
      </Button>
      </div>
    </ListGroupItem>
  );
}

export default TaskItem;




// import React from 'react';

// function TaskItem({ task, deleteTask }) {
//   return (
//     <div>
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       <button onClick={() => deleteTask(task.id)}>Delete</button>
//     </div>
//   );
// }

// export default TaskItem;

