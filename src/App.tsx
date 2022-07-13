import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { v4 as uuidv4 } from 'uuid';

import './styles/global.css';

const TASK_STORED_KEY = 'to-do-list:savedTasks';

export interface TaskContent {
  id: string;
  content: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskContent[]>([]);

  function storingTaskOnLocalStorage(taskStored: TaskContent[]) {
    setTasks(taskStored);
    localStorage.setItem(TASK_STORED_KEY, JSON.stringify(taskStored));
  }

  function loadingTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem(TASK_STORED_KEY);

    if(savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }

  useEffect(() => {
    loadingTasksFromLocalStorage();
  }, []);

  function createNewTask(taskContent: string) {
    storingTaskOnLocalStorage([...tasks, {
      id: uuidv4(),
      content: taskContent,
      isChecked: false
    }]);
  }

  function deleteTask(taskId: string) {
    const tasksWithouDeletedOne = tasks.filter(task => task.id !== taskId);

    storingTaskOnLocalStorage(tasksWithouDeletedOne);
  }

  function toggleIsCheckedTask(taskId: string) {
    const tasksWithIsCheckedToggled = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }

      return task;
    });

    storingTaskOnLocalStorage(tasksWithIsCheckedToggled);
  }

  return (
    <div>
      <Header onCreateNewTask={createNewTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleIsCheckedTask={toggleIsCheckedTask}
      />
    </div>
  )
}