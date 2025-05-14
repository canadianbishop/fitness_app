import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { AuthContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const { tasks, addTask, deleteTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');

  const { getUser } = useContext(AuthContext);

  const user = getUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    addTask({ id: Date.now(), text: newTask });
    setNewTask('');
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto py-4 text-gray-400 ">
        <div className="border py-4 px-6 mb-4 text-center">
          <h1 className="capitalize text-3xl">Hello {user.username}</h1>
          <h2>Your Tasks</h2>
        </div>

        <div className="border flex justify-between gap-4 py-4 px-6 mb-4  *:flex-1 *:border">
          <div className="p-4">
            <h3 className="font-semibold  text-2xl text-center">
              Add a new task
            </h3>
            <hr className="my-2" />
            <form onSubmit={handleSubmit} className="flex mt-12 mb-24 ">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 border border-white px-2 py-1 rounded"
              />
              <button
                type="submit"
                className="font-bold px-4 py-1 bg-blue-500 text-white rounded ml-2"
              >
                Add Task
              </button>
            </form>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-2xl text-center">Tasks</h3>
            <hr className="my-2" />

            <ul className="task-list">
              {tasks.length === 0 ? (
                <p>No tasks yet. Add one!</p>
              ) : (
                tasks.map((task) => (
                  <li key={task.id}>
                    {task.text}
                    <button type="button" onClick={() => deleteTask(task.id)}>
                      Delete
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
