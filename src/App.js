
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
const App = () =>
{
  // Toggle the addTask form
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, SetTasks] = useState([

  ])

  // Add Task
  const addTask = async (task) =>
  {
    const res = await fetch('http://localhost:5000/tasks/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      })

    const data = await res.json()
    SetTasks([...tasks, data])

    /*  const id = Math.floor(Math.floor() * 100) + 1
     const newTask = { id, ...task }
     SetTasks([...tasks, newTask]) */
  }

  // Delete Task
  const deleteTask = async (id) =>
  {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    SetTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) =>
  {
    const taskToToggle = await fetchTask(id)

    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    SetTasks(tasks.map((task) =>
      task.id === id ? {
        ...task, reminder:
          data.reminder
      } : task))
  }
  // Fetch data from API
  useEffect(() =>
  {
    const getTasks = async () =>
    {
      const tasksFromServer = await fetchTasks();
      SetTasks(tasksFromServer)
    }
    getTasks()
  }, [])


  // Function to fetch Tasks
  const fetchTasks = async () =>
  {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    //console.log(data)
    return data
  }

  // Function to update Tasks
  const fetchTask = async (id) =>
  {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    //console.log(data)
    return data
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
