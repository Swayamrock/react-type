import logo from './logo.svg';
// import MapUseCase from './Components/map';
import Todo from './Components/Todo';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header"><>hello Swayam...</>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <MapUseCase></MapUseCase> */}
        <Todo></Todo>
      </header>
    </div>
  );
}

export default App;
