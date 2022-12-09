import html from "html-literal";
import pizza from "../../image/imosPizza.png";
import italian from "../../image/pasta.jpg";
import steak from "../../image/bbq.jpg";

export default () => html`
  <section id="cuisines">
    <h3 class="foodSections">Pizza</h3>
    <!-- <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul> -->
    <div class="food">
      <img src="${pizza}" alt="pizza" />
      <h3>Italian</h3>
      <img class="italian" src="${italian}" alt="Italian" />
      <h3>BBQ</h3>
      <img class="barb" src="${steak}" alt="steak" />
    </div>
  </section>
`;
