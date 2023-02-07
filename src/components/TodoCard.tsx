import styles from './TodoCard.module.css';
import { CheckCircle, Circle, Trash } from 'phosphor-react'


export function TodoCard(props: any) {
  return (
    <div className={styles.todoCardBody}>
      <Circle size={24} className={styles.checkBox}/>
      <p>Integer urna interdum massa libero autctor neque turpis turpis sempre vel sed asdsadasdasdasdasdasdasdsada.</p>
      <Trash size={24} className={styles.deleteBtn}/>
    </div>
    
  );
}