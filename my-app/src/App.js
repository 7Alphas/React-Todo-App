import { useEffect, useState } from 'react';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  const [tasks,setTasks] = useState([]);
  useEffect( () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {}, []);
  function addTask(name) {
setTasks(prev => {
  return [...prev, {name:name,done:false}];
});
  }
  return (
   <main>
    <TaskForm onAdd={addTask} />
    {tasks.map(task => (
      <Task {...task}/>
    ))}
   </main>
  );
}

export default App;
