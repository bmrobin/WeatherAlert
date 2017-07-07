import React from 'react';

export function Weather(props) {
  return (
    <table>
      <th>Weather for Show <span id="location-id"></span></th>
      <tbody>
        <tr>
          <td>Temperature (F)</td>
          <td id="temperature-id">{props.weather.averageTempFahrenheit}</td>
        </tr>
        <tr>
          <td>Date</td>
          <td id="time-id">{props.weather.date}</td>
        </tr>
      </tbody>
    </table>
  );
}
