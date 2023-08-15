import logo from './logo.svg';
import './App.css';
import Landing from './views/Landing';
import Counter from './views/Counter';
import ToDoList from './views/ToDoList';

function App() {
  const name = "Juan"

  return (
    <div className="App">
      <header className="App-header">
        {/* <Landing name={name}/> */}
        {/* <Counter/> */}
        <ToDoList/>
      </header>
    </div>
  );
}

export default App;
