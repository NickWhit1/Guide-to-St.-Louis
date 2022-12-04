import html from "html-literal";
import pizza from "../../image/imosPizza.png";
import italian from "../../image/pasta.jpg";
import steak from "../../image/bbq.jpg";

export default () => html`
  <section id="cuisines">
    <h2>Cuisines</h2>
    <!-- <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul> -->
    <div class="food">
      <img src="${pizza}" alt="pizza" />
      <img src="${italian}" alt="Italian" />
      <img src="${steak}" alt="steak" />
    </div>
  </section>
`;
