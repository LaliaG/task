import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

function TaskForm(props) {
    const { addTask } = props;
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const statusRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newTask = {
//       id: Date.now(),
//       title: titleRef.current.value,
//       description: descriptionRef.current.value,
//       completed: false,
//     };
//     addTask(newTask);
//     titleRef.current.value = "";
//     descriptionRef.current.value = "";
    
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
        id: Date.now(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
      completed: statusRef.current.checked,
    };
    addTask(newTask);
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    dateRef.current.value = '';
    statusRef.current.checked = false;
  };
  
return (
    <Form onSubmit={handleSubmit} >
      <Form.Group controlId="title">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" ref={titleRef} placeholder="Enter task title" />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Task Description</Form.Label>
        <Form.Control as="textarea" ref={descriptionRef} placeholder="Enter task description" />
      </Form.Group>
      <Form.Group controlId="date">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" ref={dateRef} />
      </Form.Group>
      <Form.Group controlId="status">
        <Form.Check type="checkbox" label="Completed" ref={statusRef} />
      </Form.Group>
      <div className=' col-12 d-flex justify-content end'>
      <Button variant="primary" type="submit" >
        Add Task
      </Button>
      </div>
    </Form>
  );
}

export default TaskForm;



 