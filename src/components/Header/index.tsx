import styles from './Header.module.css';
import { PlusCircle } from 'phosphor-react'; 
import logo from '../../assets/logo-to-do-list.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

interface HeaderProps {
  onCreateNewTask: (taskContent: string) => void;
}

export function Header({ onCreateNewTask }: HeaderProps) {
  const [content, setContent] = useState('');

  function handleSubmitNewContentTask(event: FormEvent) {
    event.preventDefault();
    onCreateNewTask(content);
    setContent('');
  } 

  function handleChangeNewContentTask(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  return(
    <header className={styles.header}>
      <img src={logo} alt="Logo To Do List" />

      <form action="" className={styles.createNewTaskForm} onSubmit={handleSubmitNewContentTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          value={content} 
          onChange={handleChangeNewContentTask}
        />
        <button>
          Criar
          <PlusCircle size={20} weight="bold" />
        </button>
      </form>
    </header>
  );
}