import html from "html-literal";
import pizza from "../../image/imosPizza.png";
import italian from "../../image/pasta.jpg";
import steak from "../../image/bbq.jpg";

export default () => html`
  <section id="cuisines">
    <div>
      <h2 class="cuisine-type">Pizza</h2>
      <p>
        St. Louis-style is in a league all its own. It’s unique to St. Louis and
        St. Louisans demand it. First of all, it is truly thin crust pizza: not
        just in the middle, but all the way to the edges. With St. Louis-style
        pizza, you taste the toppings from edge to gloriously crispy edge, so
        you damn near bite your fingers off to get every last bit. St.
        Louis-style sauce is generally simple with a hint of oregano and
        sometimes black pepper for some zing, and a touch of sugar for some
        sweet. St. Louis-style is generally cooked crispy—no floppy crust that
        would allow our heaping pile of toppings to slide off. But the true
        difference rests in our unmistakable St. Louis pizza cheese blend. It’s
        creamy and melty, not stringy. It has bold flavor with a hint of
        smokiness. It is this blend that gives St. Louis-style its distinct
        flavor. But How Does That Make It the Best?
      </p>
      <img src="${pizza}" alt="pizza" />
      <div>
        <h2>Farotto's  </h2>
        <p>"The local institution has stayed in the game for years by following the same basic formula: perfectly distributed, properly sized premium toppings on top of a rolled-thin crust."</p>
      </div>
    </div>
    <!-- <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul> -->
    <hr>
      <div>
        <h3 class="cuisine-type" >Italian</h3>
        <p>
          While the city of St. Louis relies heavily on its French roots and
          traditions, STL also is well-known for having some of the best Italian
          food in the country, specializing in toasted ravioli
        </p>
        <img class="italian" src="${italian}" alt="Italian" />
      </div>
      <hr>
      <h3 class="cuisine-type" >BBQ</h3>
      <p>
        St. Louis ribs certainly dominate the BBQ scene. However, the Gateway
        City is also known for its pulled pork, burnt ends, snoots, and pork
        steaks. Pork steaks are also very popular.
      </p>
      <img class="barb" src="${steak}" alt="steak" />
    </div>
  </section>
`;
