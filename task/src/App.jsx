import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const tasks = [
    // Exemple de données de tâches
    {
      id: 1,
      title: 'Acheter des courses pour la semaine',
      description: 'Fruits, légumes, etc.',
      date: '2024-02-22',
      completed: false,
    },
    // ... autres tâches
  ];

  return (
    <Container>
      <TaskList tasks={tasks} />
    </Container>
  );
}

export default App;



