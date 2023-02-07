import styles from './Header.module.css';

import todoLogo from '../assets/todo-logo.svg';

export function Header(props: any) {
  return (
    <header className={styles.headerContainer}>
      <img src={todoLogo} alt="logotipo"></img>
    </header>
    
  );
}