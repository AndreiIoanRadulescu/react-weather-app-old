import React from "react";

const Weather = (props) => {
  return (
    <div className='container'>
      <div className='cards'>
        <h1>
          {props.city}, {props.country}
        </h1>
        <div>
          <h5 className='py-4 vreme'>Umiditate {props.humidity}</h5>
          <h1 className='py-2'>{props.temperature}&deg;</h1>

          <h3>
            <span className='px-4'>{props.temperatureMin}&deg;</span> -
            <span className='px-4'>{props.temperatureMax}&deg;</span>
          </h3>
        </div>

        <table className='table d-none'>
          <thead>
            <tr>
              <th scope='col'>Astazi</th>
              <th scope='col'>Maine</th>
              <th scope='col'>Poimaine</th>
              <th scope='col'>Raspoimaine</th>
              <th scope='col'>Peste 4 zile</th>
              <th scope='col'>Peste 5 zile</th>
              <th scope='col'>Peste 6 zile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.prognosis0}</td>
              <td>{props.prognosis1}</td>
              <td>{props.prognosis2}</td>
              <td>{props.prognosis3}</td>
              <td>{props.prognosis4}</td>
              <td>{props.prognosis5}</td>
              <td>{props.prognosis6}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Weather;
