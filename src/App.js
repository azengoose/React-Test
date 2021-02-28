import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
function App(props) {
  <div className = "hell">
  <div id = 'dino'></div>
<style>.dino {"background-size: 50px 50px; color: red"}</style></div>
  const subject = props.subject
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hello, {subject}!
        </h2>
      </header>
    </div>
  );
}
function First() {
  return (
    <div className="First">
      <header className="First-header">
        <h1>Hohoho</h1>
      </header>
    </div>
  );
}
export default App;
//export default First;
