import html from "html-literal";
import stlArch from "../../image/arch.jpg";

export default () => html`
  <header>
    <div class="search">
      <label for="site-search">Search</label>
      <input type="search" id="site-search" class="search-bar" />
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, alias
      praesentium! In tempore tempora eius velit quis iure. Provident, ad!
      Aspernatur expedita aperiam nam repudiandae sed rerum culpa harum error
      corrupti dolorem et pariatur atque ipsum laboriosam, aliquid nesciunt
      repellat maiores magnam amet iste iusto minus quidem officiis unde.
      Doloremque!
    </p>
    <div></div>
    <img src="${stlArch}" alt="St. Louis Arch" />
  </header>
`;
