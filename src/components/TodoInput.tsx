import styles from './TodoInput.module.css';
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface TodoInputProps {
  addTaskCallback: (text: string) => void
}

export function TodoInput({ addTaskCallback } : TodoInputProps) {

  const [newTaskText, setNewTaskText] = useState('');

  function handleInputTaskSubmited(event: FormEvent) {
    event.preventDefault();
    addTaskCallback(newTaskText);
    setNewTaskText('');
  }
  function handleInputTaskChanged(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  return (
    <div className={styles.todoInputContainer}>
      <form className={styles.taskForm} onSubmit={handleInputTaskSubmited}>
        <input 
          placeholder='Adicione uma nova tarefa' 
          onChange={handleInputTaskChanged}
          value={newTaskText}
        >
        </input>
        <footer>
          <button type='submit'>
            <p>Criar</p>
            <PlusCircle size={16}/>
          </button>
          
        </footer>
      </form>
    </div>
    
  );
}