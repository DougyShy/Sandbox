import logo from './logo.svg';
// import complexSVG from './complexSVG.svg';
import './App.css';
import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// example on how to use a shared state
function ParentComponent() {
  const [sharedState, setSharedState] = useState(0);
  return (
    <div>
      <ChildComponentOne sharedState={sharedState} />
      <ChildComponentTwo setSharedState={setSharedState} />
    </div>
  )

  function ChildComponentOne({sharedState}) {
    return <div>Shared State:{sharedState}</div>
  }

  function ChildComponentTwo({setSharedState}) {
    return <button onClick={ () => setSharedState(state => state + 1) }>Increment</button>;
  }
}

class WelcomeClass extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
  }

  render() {
    return <h1>{this.state.greeting}, {this.props.name}</h1>;
  }

}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // This continuously counts from zero
      //setSeconds(seconds => seconds + 1);
      // This continuously counts from 0 to 60 and then resets
      setSeconds(prevSeconds => (prevSeconds + 1) % 60);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

    return <p>Timer: {seconds} seconds</p>
}

function CounterFunc() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

function handleClick() {
  console.log('Button clicked');
};

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
};

function WelcomeMessage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
};

function WelcomeFunctionalComponent({ username }) {
  const [greeting, setGreeting] = useState('Hello there');
    return <h1>{greeting}, {username}</h1>
};

function UserInfo ({ user, onClick }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <button onclick={onClick}>Click Me</button>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
  onclick: PropTypes.func,
};

UserInfo.defaultProps = {
  user: { name: 'Default User', age: 0 },
};

function BoilingVerdict ( { celsius }) {
  return <p>{celsius >= 100 ? 'The water would boil.' : 'The water would not boil.'}</p>;
}

function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label>
        Enter temperature in Celsius:
          <input
            type="text"
            value={temperature}
            onChange={ (e) => onTemperatureChange(e.target.value)}
          />
      </label>
    </div>
  );
};

function Calculator() {
  const [temperature, setTemperature] = useState('');

  function handleTemperatureChange(temperature) {
    setTemperature(temperature);
  }

  return (
    <div>
      <TemperatureInput temperature={temperature}
      onTemperatureChange={handleTemperatureChange} />
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </div>
  );
}

// Basic Example of an HOC (Higer Order Component)
// Create an HOC
function withAdditionalData(WrappedContent) {
  return function(props) {
    const extraData = 'Extra Data';
    return <WrappedContent extraData={extraData} {...props} />;
  };
}

// Using the HOC
function MyComponent({ extraData }) {
  return <div>{extraData}</div>
}

// This will allow EnhancedComponent to now have access to extraData
const EnhancedComponent = withAdditionalData(MyComponent);

/*function User({ userID }) {
  const [user, setUser] = useState(null);

  useEffect (() => {
    fetchData(userID).then(data => setUser(data));
  }, [userID]);

    return(
      <div>
        {user ? <p>{user.name}</p> : <p>Loading...</p>}
      </div>
    );
}*/

class MouseTracker extends React.Component {
  constructor (props) {
    super(props);
    this.state = { x: 0, y: 0};
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
      });
    }

    render() {
      return (
        <div style={{ height: '100vh'}} onMouseMove={this.handleMouseMove}>{this.props.render(this.state)}</div>
      );
    }
};

function getMouseCoords () {
  return (
    <MouseTracker render={({ x, y}) => (
      <h1>The mouse position is ({x}, {y})</h1>
    )} />
  );  
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError : false };
  }

  static getDerivedStateFromError(error) {
    // Update state to render fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information
    console.error("Error caught by Error Boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return <h1>Something went wrong.</h1>
    }

  return this.props.children;
  }
}

function MyErrorBoundaryComponent() {
  return (
    <ErrorBoundary>
      {/*ComponentThatMayThrowError />*/}
    </ErrorBoundary>
  );
}

function App() {

  const element = <Welcome name="React Developer" />;
  const isLoggedIn = false;
  const items = ['Apple', 'Banana', 'Cherry'];

  const listItems = items.map((item) => <li key={item}>{item}</li>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<img src={complexSVG} className="App-logo" alt="complexSVG" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Today's date: {new Date().toLocaleDateString()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>CLICK THIS BUTTON TO PRINT TO CONSOLE</button>
        <h1>{element}</h1>
        {WelcomeMessage({isLoggedIn})}
        <WelcomeClass name="DOUG" />

        <ul>{listItems}</ul>
        <Counter />
        {CounterFunc()}
        <WelcomeFunctionalComponent username='Billy' />
        {Timer()}
        {ParentComponent()}
        {Calculator()}
        {getMouseCoords()}
        {/*MyErrorBoundaryComponent*/}
        
      </header>
    </div>
  );
}

export default App;
