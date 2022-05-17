# MLH Prep Project
It is a Reactjs-based weather website with an integrated **Progressive Web App**. 
The application fetched weather from your location once you allow your location. It comes with basic weather information like Temperature, Pressure, Humidity, Visibility and Wind speed. The application shows **Hourly and weekly forecasts** for the current city and displays the same in **Graphical Interpretation.**
If present, It shows the **Weather-warnings** for the impending problems with the weather.

The user can also check this information for another location by simply searching it or pin pointing it on the Map.

We're using the [OpenWeather API](https://openweathermap.org/current) to get weather data on different cities. The [Leaflet](https://react-leaflet.js.org/) is used for map, [React Search Autocomplete](https://www.npmjs.com/package/react-search-autocomplete) is used for the Search bar, [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) is used for fetching the current location to get weather data of the current city, [Howler](https://www.npmjs.com/package/howler) for sounds, [ChartJs](https://www.chartjs.org/) for charts, and Lottie animation is used for animations.
 


![mlh-prep-proj-ss](https://user-images.githubusercontent.com/71374972/168884232-a7f03200-5af3-443c-baad-ac17596cd2e5.png)


## Setting Up The Project Locally
- Make sure you have [Node.JS and NPM](https://nodejs.org/en/download/package-manager/) installed.
- Clone this repository.
- Install the Yarn package manager with `npm install --global yarn`
- Install dependencies with `yarn install`
- Set up your API keys in the `.env` file.
- Run the app with `yarn start`.
