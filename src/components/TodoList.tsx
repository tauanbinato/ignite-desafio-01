import styles from './TodoList.module.css';
import { Clipboard } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import { TodoCard } from './TodoCard';

const todoList = [
  {
    id: uuidv4(),
    title: 'Terminar desafio',
    publishedAt: new Date('2023-02-02 20:00:00'),
    completedAt: new Date('2023-02-02 20:00:00')
  },
  {
    id: uuidv4(),
    title: 'Terminar desafio',
    publishedAt: new Date('2023-02-02 20:00:00'),
    completedAt: new Date('2023-02-02 20:00:00')
  },
  {
    id: uuidv4(),
    title: 'Terminar desafio',
    publishedAt: new Date('2023-02-02 20:00:00'),
    completedAt: new Date('2023-02-02 20:00:00')
  },
  {
    id: uuidv4(),
    title: 'Terminar desafio',
    publishedAt: new Date('2023-02-02 20:00:00'),
    completedAt: new Date('2023-02-02 20:00:00')
  },
]

export function TodoList(props: any) {
  return (
    <div className={styles.todoListContainer}>

      {/* Header  */}
      <header className={styles.todoListHeader}>
        <div className={styles.createdTasks}>
          <p>Tarefas Criadas</p>
          <p>0</p>
        </div>
        
        <div className={styles.concludedTasks}>
          <p>Concluídas</p>
          <p>0</p>
        </div>
      </header>

      {/* When List is empty  */}
      { todoList.length === 0 ? 

        <div className={styles.emptyList}>
          <Clipboard className={styles.clipboard} size={56}/>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p> Crie tarefas e organize seus itens a fazer</p>
        </div>
        : 
        
        todoList.map(todo => {
          return <TodoCard key={todo.id}/>
        })
        
        
      }
      

    </div>
      
   
   
   
    
  );
}