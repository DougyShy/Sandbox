import logo from './logo.svg';
import './App.css';

// ***** WONT WORK BECAUSE 'fs' is backend and REACT is Frontend

// const fs = require('fs');

// Reading JSON from a .txt or .csv file
/*fs.readFile('NFL_SEASON.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);
    console.log(jsonData);
});*/



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

export default App;
