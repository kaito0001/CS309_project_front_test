import logo from "./logo.svg";
import "./App.css";
import HomeAPI from "./api/home";

function App() {
  async function postHome(params) {
    const result = await HomeAPI.postHome(params);
    console.log(result);
  }

  return (
    <div className="App">
      <button onClick={(e) => postHome({ name: "ffsd" })}>callHome</button>
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

export default App;
