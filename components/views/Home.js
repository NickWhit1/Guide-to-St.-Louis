import html from "html-literal";
import stlArch from "../../image/arch.jpg";

export default state => html`
  <header>
    <div class="search">
      <label for="site-search">Search</label>
      <input type="search" id="site-search" class="search-bar" />
    </div>
    <p class="aboutStl">
      St. Louis is a major city in Missouri along the Mississippi River. Its
      iconic, 630-ft. Gateway Arch, built in the 1960s, honors the early
      19th-century explorations of Lewis and Clark and America's westward
      expansion in general. Replica paddlewheelers ply the river, offering views
      of the arch. The Soulard district is home to barbecue restaurants and
      clubs playing blues music.
    </p>
    <div class="homePics">
      <img src="${stlArch}" alt="St. Louis Arch" />
    </div>
  </header>
  <h3>
    <div class="window">
      <ul>
        <li>${state.weather.icon}</li>
        <li>
          The weather in ${state.weather.city.name} is
          ${state.weather.description}.
        </li>
        <li>Temperature is ${state.weather.temp}F.</li>
        <li>Real Feel ${state.weather.feels_like}F.</li>
        <li>Low temp of ${state.weather.temp_min}F.</li>
      </ul>
    </div>
    <div class="window">
      <ul>
        <li>
          The weather in ${state.weather.city.name} is
          ${state.weather.description}.
        </li>
        <li>Temperature is ${state.weather.temp}F.</li>
        <li>Real Feel ${state.weather.feels_like}F.</li>
        <li>Low temp of ${state.weather.temp_min}F.</li>
      </ul>
    </div>
    <div class="window">
      <ul>
        <li>
          Skies are ${state.weather.city.name} is ${state.weather.description}.
        </li>
        <li>Temperature is ${state.weather.temp}F.</li>
        <li>Real Feel ${state.weather.feels_like}F.</li>
        <li>Low temp of ${state.weather.temp_min}F.</li>
      </ul>
    </div>
  </h3>
`;
