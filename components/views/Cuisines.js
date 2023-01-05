import html from "html-literal";
import pizza from "../../image/imosPizza.png";
import italian from "../../image/pasta.jpg";
import steak from "../../image/pappys.webp";

export default () => html`
  <section id="cuisines">
    <div>

      <h2 class="cuisine-type">Pizza</h2>
      <p class="foodPics" >
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
    <div>
        <h2 class="imo" >Imos</h2>
        <a class="imos" href="https://www.imospizza.com/"><img class="pizzaPic" src="${pizza}" alt="pizza"/></a>
      <p class="foodPics" >"The local institution has stayed in the game for years by following the same basic formula: perfectly distributed, properly sized premium toppings on top of a rolled-thin crust."</p>
      </div>
    </div>
    <hr>
      <div>
        <h2 class="cuisine-type" >Italian</h2>
        <p>
          While the city of St. Louis relies heavily on its French roots and
          traditions, STL also is well-known for having some of the best Italian
          food in the country, specializing in toasted ravioli
        </p>
      </div>
        <h2 class="imo" >Brio Italian Grill</h2>

        <a href="https://locations.brioitalian.com/us/mo/st--louis/1601-south-lindbergh-blvd?utm_source=google&utm_campaign=lgmb&utm_medium=organic&utm_content=local-listing"><img class="italian" src="${italian}" alt="Italian" /></a>
      </div>
      <p class="pmargin" >Brio Frontenac is a premier Tuscan-inspired restaurant destination serving authentic, northern Italian cuisine, luxury wines & cocktails—our specialties include premium quality steaks, chops, seafood, made-to-order pasta and flatbreads prepared in an authentic Italian wood-burning oven. Bringing the pleasures of the Tuscan country villa to St. Louis, our chef-inspired menu, chic atmosphere and world-class service will provide a dining experience like no other! We look forward to your visit at Frontenac located in St. Louis, MO – make your reservation or place an online order today!</p>
      <hr>
      <h2 class="cuisine-type" >BBQ</h2>
        <p class="foodPics" >
        St. Louis ribs certainly dominate the BBQ scene. However, the Gateway
        City is also known for its pulled pork, burnt ends, snoots, and pork
        steaks. Pork steaks are also very popular.
        </p>
        <h2 class="imo">Pappy's Smokehouse</h2></h2>

          <a href="https://www.pappyssmokehouse.com/"><img class="barb" src="${steak}" alt="ribs" /></a>
      <p class="pmargin" >Pappy kept things simple. He loved the outdoors and he worked hard. When people came to visit, he tried always to provide an atmosphere for great food and good times. A perfect description of Pappy's Smokehouse today.</p>
    </div>
  </section>
`;
