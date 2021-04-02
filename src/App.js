
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
const App = () =>
{
  // Toggle the addTask form
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, SetTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])

  // Add Task
  const addTask = (task) =>
  {
    const id = Math.floor(Math.floor() * 100) + 1
    const newTask = { id, ...task }
    SetTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) =>
  {
    SetTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) =>
  {
    SetTasks(tasks.map((task) =>
      task.id === id ? {
        ...task, reminder:
          !task.reminder
      } : task))
  }


  return (
    <div className="container">

      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No task found!'}
    </div>
  );
}


export default App;
