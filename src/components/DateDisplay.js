import React from 'react';

const DateDisplay = () => {
  const currentDate = new Date();
  const day = currentDate.getDay();
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

export default DateDisplay ;
