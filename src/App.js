import logo from './logo.svg';
import './App.css';
import Functional from './components/Functional';
import Class from "./components/Class";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>Text from App</p>

        <Functional
            name = 'Yuriy'
            age = '37'
        />

        <Functional
            name = 'Ivan'
            age = '36'
        />

        <Functional
            name = 'Sergey'
            age = '38'
        />

        <Class/>

      </header>
    </div>
  );
}

export default App;
