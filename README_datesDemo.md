Let's create a simple React project structure to demonstrate the usage of date objects, extraction of day, month, and year, and display the information in a meaningful way. This example will involve a basic React component that displays the current date.

Here's a suggested project structure:

```plaintext
my-date-demo/
|-- src/
|   |-- components/
|   |   |-- DateDisplay.js
|   |-- App.js
|   |-- index.js
|-- package.json
|-- (other configuration files)
```

Now, let's create the files and write the code:

1. **src/components/DateDisplay.js:**

```jsx
import React from 'react';

const DateDisplay = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <div>
      <h2>Current Date</h2>
      <p>Day: {day}</p>
      <p>Month: {month}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default DateDisplay;
```

2. **src/App.js:**

```jsx
import React from 'react';
import DateDisplay from './components/DateDisplay';

const App = () => {
  return (
    <div>
      <h1>React Date Demo</h1>
      <DateDisplay />
    </div>
  );
};

export default App;
```

3. **src/index.js:**

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

4. **package.json:**

Make sure to have your `package.json` with the necessary dependencies and scripts.

```json
{
  "name": "my-date-demo",
  "version": "1.0.0",
  "description": "A simple React project to demonstrate working with date objects",
  "main": "index.js",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

Make sure to run `npm install` to install the dependencies.

Now, you can run your React app with `npm start`, and it should display the current date in a structured way. Feel free to expand upon this structure and add more features as needed for your demonstration.
