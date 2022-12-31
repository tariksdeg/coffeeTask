import "./App.css";
import { useEffect } from "react";

function App() {
  const function1 = async () => {
    console.log(1);
    await setTimeout(() => {
      console.log(2);
    }, 2000);

    console.log(3);
  };
  useEffect(() => {
    function1();
  }, []);

  return (
    <div className="App">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
