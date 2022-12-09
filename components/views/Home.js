import html from "html-literal";
import stlArch from "../../image/arch.jpg";
import horses from "../../image/clydesdales.jpg";

export default state => html`
  <header>
    <div class="search">
      <label for="site-search">Search</label>
      <input type="search" id="site-search" class="search-bar" />
    </div>
    <p class="aboutStl">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, alias
      praesentium! In tempore tempora eius velit quis iure. Provident, ad!
      Aspernatur expedita aperiam nam repudiandae sed rerum culpa harum error
      corrupti dolorem et pariatur atque ipsum laboriosam, aliquid nesciunt
      repellat maiores magnam amet iste iusto minus quidem officiis unde.
      Doloremque!
    </p>
    <div class="homePics">
      <img src="${stlArch}" alt="St. Louis Arch" />
      <img src="${horses}" alt="Clydesdales" />
    </div>
  </header>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
