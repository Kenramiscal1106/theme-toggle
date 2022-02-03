import './App.css';
import {ReactComponent as ThemeToggle1} from './icons/Theme-toggle01.svg'
import {ReactComponent as ThemeToggle2} from './icons/Theme-toggle02.svg'


function App() {
  return (
    <div className="App">
      <h1>This works</h1>
      <ThemeToggle2 />
      <ThemeToggle1 />
    </div>
  );
}

export default App;
