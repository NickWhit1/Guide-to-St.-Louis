import html from "html-literal";
import stlArch from "../../image/arch.jpg";
import stlClydesdales from "../../image/clydesdale.jpg";

export default state => html`
  <header class="homeBody" >
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
      clubs playing blues music. The town gained fame in 1803 as the jumping-off point for the Louisiana Purchase Expedition of Meriwether Lewis and William Clark. After 1804, more New Englanders and other East Coast emigrants settled in St. Louis, but the population remained predominantly French until well into the 19th-Century. St.
    </p>
    <div class="homePics">
    <img class="arch" src="${stlArch}" alt="St. Louis Arch" />
    </div>
  </header>
  <body>
  <div>
    <img class="horses" src="${stlClydesdales}" alt="Pic of Clydesdale horses" />
    </div>
    <div class="window">
      <ul>
        <!-- <li>${state.weather.icon}</li> -->
        <li>
          The weather in ${state.weather.city.name} is
          ${state.weather.description}.
        </li>
        <li>Temperature is ${state.weather.temp}F.</li>
        <li>Real Feel ${state.weather.feels_like}F.</li>
        <li>Low temp of ${state.weather.temp_min}F.</li>
      </ul>
    </div>

    </body>
    <div id="openweathermap-widget-11">
      <ul>
      </ul>
    </div>
  </h3>
`;
