import { useEffect, useState } from 'react';
import './App.css';
import {ReactComponent as ThemeToggle1} from './icons/Theme-toggle01.svg'
import {ReactComponent as ThemeToggle2} from './icons/Theme-toggle02.svg'


function App() {
  const [theme, setTheme] = useState('');
  const [dark, setDark] = useState(false)
  useEffect(() => {
    if (dark) setTheme('dark')
    else setTheme('')
  }, [dark])
  const changeTheme = () => {
    setDark(!dark)
  }
  return (
    <div className={`App ${theme}`}>
      <h1>This works</h1>
      <button className={`theme-toggle ${theme}`} onClick={changeTheme} id="Theme-toggle-radio"><ThemeToggle2 /></button>
      <button className={`theme-toggle ${theme}`} onClick={changeTheme} id="Theme-toggle-button"><ThemeToggle1 /></button>
      
    </div>
  );
}

export default App;
