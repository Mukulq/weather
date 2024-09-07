import React from "react";

function SearchResults(props) {
  function getDayOfWeek(dateString) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay(); // Returns a number (0-6) representing the day of the week
    return daysOfWeek[dayOfWeekIndex];
  }
  function formatDate(inputDate) {
    // Create an array to hold the names of the months
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Parse the input date string to get year, month, and day
    const [year, monthIndex, day] = inputDate.split("-");

    // Convert monthIndex to integer and subtract 1 (JavaScript months are zero-based)
    const monthName = months[parseInt(monthIndex, 10) - 1];

    // Add the ordinal suffix to the day
    const dayWithSuffix = addOrdinalSuffix(parseInt(day, 10));

    // Format the date string
    const formattedDate = `${dayWithSuffix} ${monthName}, ${year}`;

    return formattedDate;
  }

  // Helper function to add ordinal suffix to the day
  function addOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return day + "th";
    }
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }

  // Example usage:
  const inputDate = "2024-12-25";
  const formattedDate = formatDate(inputDate);
  console.log(formattedDate); // Output: "25th December, 2024"
  if (!props.data.location) {
    return <div></div>;
  }
  const forecast = props.data.forecast.forecastday.map((obj, i) => {
    return (
      <div className="forecast--day">
        <img src={obj.day.condition.icon} />
        <div>
          <p>{getDayOfWeek(obj.date)}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="search-results">
      <img
        src={props.data.current.condition.icon}
        alt="Weather Icon"
        className="weather-icon"
      />
      <div>
        <h1>{props.data.location.name}</h1>
        <h5>{props.data.current.temp_c} C</h5>
        <h5>{props.data.current.condition.text}</h5>
        <h5>{props.data.current.humidity}% humid</h5>
        <h5>{formatDate(props.data.forecast.forecastday[0].date)}</h5>
      </div>
      {props.data.forecast.forecastday && (
        <div className="forecast">{forecast}</div>
      )}
    </div>
  );
}

export default SearchResults;
