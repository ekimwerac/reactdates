In React, working with date objects is a common task, especially when dealing with features that involve dates such as calendars, scheduling, or event handling. JavaScript provides a built-in `Date` object that can be used to represent and manipulate dates. Below are some ways to work with date objects in React, including extracting day, month, and year:

### 1. Creating Date Objects:

You can create a new `Date` object in various ways:

```jsx
const currentDate = new Date(); // Current date and time
const specificDate = new Date('2023-12-06'); // Specific date
const specificDateTime = new Date('2023-12-06T12:00:00'); // Specific date and time
const timestampDate = new Date(1638768000000); // Using a timestamp
```

### 2. Extracting Day, Month, and Year:

Once you have a `Date` object, you can extract the day, month, and year using various methods:

```jsx
const date = new Date();

const day = date.getDate(); // Day of the month (1-31)
const month = date.getMonth() + 1; // Month (0-11), add 1 to get the actual month (1-12)
const year = date.getFullYear(); // Full year (e.g., 2023)
```

### 3. Formatting Dates:

You can format dates using the `toLocaleString()` method or external libraries like `date-fns` or `moment`.

```jsx
const formattedDate = date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
// Outputs something like "Tuesday, December 6, 2023"
```

### 4. Working with Time:

If you need to work with the time part of the date, you can extract hours, minutes, and seconds:

```jsx
const hours = date.getHours(); // Hours (0-23)
const minutes = date.getMinutes(); // Minutes (0-59)
const seconds = date.getSeconds(); // Seconds (0-59)
```


### 5. Manipulating Dates:

You can perform various operations like adding or subtracting days, months, or years:

```jsx
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); // Adding one day
```

### 6. Using External Libraries:

Consider using external libraries like `date-fns` or `moment` for more advanced date manipulation and formatting. Install them via npm:

```bash
npm install date-fns
# or
npm install moment
```

### Example in React Component:

```jsx
import React from 'react';

const MyComponent = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <div>
      <p>Day: {day}</p>
      <p>Month: {month}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default MyComponent;
```

Remember that the JavaScript `Date` object operates in the user's local time zone, so be cautious about time zone-related issues when dealing with dates in a global context. External libraries often handle these issues more gracefully.