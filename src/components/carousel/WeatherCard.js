import './WeatherCard.css';

const iconList = {
  '01d': 'wi-day-sunny',
  '01n': 'wi-night-clear',
  '02d': 'wi-day-cloudy',
  '02n': 'wi-night-alt-cloudy',
  '03d': 'wi-cloud',
  '03n': 'wi-cloud',
  '04d': 'wi-cloudy',
  '04n': 'wi-cloudy',
  '09d': 'wi-showers',
  '09n': 'wi-showers',
  '10d': 'wi-day-rain',
  '10n': 'wi-night-alt-rain',
  '11d': 'wi-thunderstorm',
  '11n': 'wi-thunderstorm',
  '13d': 'wi-snow',
  '13n': 'wi-snow',
  '50d': 'wi-day-fog',
  '50n': 'wi-night-fog',
};

function timeConverterTime(unixTimestamp){
  const a = new Date(unixTimestamp * 1000);
  const hour = a.getHours();
  const min = a.getMinutes();
  const time = `${hour}:${min}` ;
  return time;
}

function timeConverterDate(unixTimestamp){
  const a = new Date(unixTimestamp * 1000);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const month = months[a.getMonth()];
  const date = a.getDate();
  const time = `${month} ${date}` ;
  return time;
}

export default function WeatherCard({ value, data }) {
  // const value = props.value;
  console.log('this is data: ', data);
  console.log('this is value: ', value);

  const iconClass = iconList[data.weather.icon];

  const todayDate = timeConverterDate(data.dt); 
  const todayTime = timeConverterTime(data.dt);
  console.log('this is date new:', todayDate);
  
  return (
    <>
      {value === 'Daily' && (
        <>
          <div className="container">
            <div className="time">
              <span className="day">Day</span>
              <span className="date">{todayDate}</span>
            </div>
            <i className={`wi ${iconClass}`} />
            <div className="low">
              <span>
                High <b>{data.temp.max}°C</b>
              </span>
            </div>
            <div className="high">
              <span>
                Low <b>{data.temp.min}°C</b>
              </span>
            </div>
          </div>
        </>
      )}
      {value === 'Hourly' && (
        <>
          <div className="container">
            <div className="time">
              <span className="day">Today</span>
              <span className="date">{todayTime}</span>
            </div>
            <i className={`wi ${iconClass}`} />
            <div className="low">
              <span className="humidity-info">
                RH <b>{data.humidity}%</b>
              </span>
            </div>
            <div className="high">
              <span className="humidity-info">
                Temp <b>{data.temp}°C</b>
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
