import styles from './TodoList.module.css';
import { Clipboard } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { TodoCard } from './TodoCard';


interface TodoTask {
  id: string,
  title: string,
  publishedAt: Date,
  completedAt: Date | string,
  isCompleted: boolean
}

interface TodoListProps {
  list: TodoTask[];
  onCheckBoxClickedCallback: (id:string) => void;
  onDeleteCallback: (id:string) => void;
}

export function TodoList({ list, onCheckBoxClickedCallback, onDeleteCallback } : TodoListProps) {

  function handleTaskCompleted(id: string) {
    onCheckBoxClickedCallback(id);
  }

  function handleDeleteTask(id: string) {
    onDeleteCallback(id);
  }

  return (
    <div className={styles.todoListContainer}>

      {/* Header  */}
      <header className={styles.todoListHeader}>
        <div className={styles.createdTasks}>
          <p>Tarefas Criadas</p>
          <p>{ list.length }</p>
        </div>
        
        <div className={styles.concludedTasks}>
          <p>Concluídas</p>
          <p> 
            { list.filter(task => { return task.isCompleted }).length }
          </p>
        </div>
      </header>

      {/* When List is empty  */}
      { list.length === 0 ? 

        <div className={styles.emptyList}>
          <Clipboard className={styles.clipboard} size={56}/>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p> Crie tarefas e organize seus itens a fazer</p>
        </div>
        : 
        
        list.map(todo => {
          return <TodoCard 
            key={todo.id} 
            task={todo} 
            onCheckBoxClickedCallback={handleTaskCompleted}
            onDeleteTaskClickedCallback={handleDeleteTask}
          />
        
        })
        
        
      }
      

    </div>
      
   
   
   
    
  );
}