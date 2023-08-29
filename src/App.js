import logo from './logo.svg';
import './App.scss';
import Landing from './views/Landing';
import Counter from './views/Counter';
import ToDoList from './views/ToDoList';
import SendComments from './views/SendComments';
import StarWarsCharacters from './views/StarWarsCharacters';
//import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const name = "Juan"

  return (
    <div className="App">
      <header>
        <Landing name={name}/>
        {/* <Counter/> */}
        {/* <ToDoList/> */}
        {/* <SendComments/> */}
        {/* <StarWarsCharacters/> */}
      </header>
    </div>
  );
}

export default App;
