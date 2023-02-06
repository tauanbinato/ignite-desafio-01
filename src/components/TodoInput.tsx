import styles from './TodoInput.module.css';
import { PlusCircle } from 'phosphor-react'

export function TodoInput(props: any) {
  return (
    <div>
      <form className={styles.taskForm}>
        <input placeholder='Adicione uma nova tarefa'></input>
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