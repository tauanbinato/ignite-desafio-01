import styles from './TodoCard.module.css';
import { CheckCircle, Circle, Trash } from 'phosphor-react'

interface TodoCardProps {
  task: {
    id: string,
    title: string,
    publishedAt: Date,
    completedAt: Date | string,
    isCompleted: boolean
  };
  onCheckBoxClickedCallback: (id:string) => void;
}

export function TodoCard({ task, onCheckBoxClickedCallback } : TodoCardProps) {

  function handleOnCheckBoxClick() {
    onCheckBoxClickedCallback(task.id);
  }

  return (
    <div className={styles.todoCardBody}>
      { 
        task.isCompleted ? 
        <CheckCircle size={24} className={styles.checkBoxCompleted} onClick={handleOnCheckBoxClick}/> : 
        <Circle size={24} className={styles.checkBox} onClick={handleOnCheckBoxClick}/>
      }
      <p>{task.title}</p>
      <Trash size={24} className={styles.deleteBtn}/>
    </div>
    
  );
}