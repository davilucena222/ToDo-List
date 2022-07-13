import { TaskContent } from '../../App';
import { Task } from '../Task';

import clippboard from '../../assets/clipboard.svg';
import styles from './Tasks.module.css';

interface TasksProps {
  tasks: TaskContent[];
  onDeleteTask: (taskId: string) => void;
  onToggleIsCheckedTask: (taskId: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onToggleIsCheckedTask }: TasksProps) {
  const taskLength = tasks.length;
  const tasksChecked = tasks.filter(task => task.isChecked === true).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p className={styles.createdTasks}>Tarefa criadas</p>
          <span>{taskLength}</span>
        </div>

        <div>
          <p className={styles.tasksDone}>Concluídas</p>
          <span>{tasksChecked} de {taskLength}</span>
        </div>
      </header>

      <div className={styles.taskList}>
        {/* {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onDeleteTask={onDeleteTask} 
            onToggleIsCheckedTask={onToggleIsCheckedTask}
          />
        ))} */}

        {tasks.length <= 0 ? (
          
          <section className={styles.empty}>
            <img src={clippboard} />
            <div>
              <p>
                Você ainda não tem tarefas cadastradas 
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </section>
        ) : (
          tasks.map(task => (
            <Task 
              key={task.id} 
              task={task} 
              onDeleteTask={onDeleteTask} 
              onToggleIsCheckedTask={onToggleIsCheckedTask}
            />
          ))
        )}
      </div>
    </section>
  );
}