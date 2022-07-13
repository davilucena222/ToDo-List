import styles from './Task.module.css';
import { Circle, Trash, CheckCircle } from 'phosphor-react';
import { TaskContent } from '../../App';
import check from '../../assets/checkTask.svg';

interface TaskProps {
  task: TaskContent;
  onDeleteTask: (taskId: string) => void;
  onToggleIsCheckedTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onToggleIsCheckedTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkTask} onClick={() => onToggleIsCheckedTask(task.id)}>
        {task.isChecked ? <img src={check} /> : <Circle size={24} color="#4EA8DE" />}
      </button>

      <p className={task.isChecked ? styles.taskContent : ''}>
        {task.content}
      </p>

      <button className={styles.deleteTask} onClick={() => onDeleteTask(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}

