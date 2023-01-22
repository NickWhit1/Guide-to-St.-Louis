import html from "html-literal";
import buschStadiumImage from "../../image/buschStadium.jpg";
import zooImage from "../../image/penquins.jpg";
import gardenImage from "../../image/botanicalGarden.jpg";

export default () => html`
  <main id="attractions">
    <h2 class="places">Busch Stadium</h2>
    <div>
      <a href="https://www.mlb.com/cardinals" target="_blank"
        ><img
          class="imageBorder"
          src="${buschStadiumImage}"
          alt="Picture of Busch Stadium"
      /></a>
    </div>
    <p>
      Busch Stadium is a baseball stadium located in St. Louis, Missouri. The
      stadium serves as the home of the St. Louis Cardinals, the city's Major
      League Baseball franchise, and has a seating capacity of 44,494, with
      3,706 club seats and 61 luxury suites. Founded in 1892 and named the St.
      Louis Browns, the team first appeared at Sportsman's Park. In 1900, the
      franchise was renamed "Cardinals" and the world famous uniforms were born.
      The team lived a meager existence until the mid-1920s. In 2011, however,
      they're second to the Yankees for the most World Series championships with
      10. The Cardinals are the only National League team to have won more World
      Series head-to-head against the damned Yankees (3-2). Join me as I count
      down the top teams the Cardinals have ever put on the field.
    </p>
    <a
      class="address"
      href="https://www.mapquest.com/directions"
      target="_blank"
      >700 Clark Ave, St. Louis, MO 63102</a
    >
    <hr />
    <h2 class="places">St. Louis Zoo</h2>
    <div>
      <a href="https://stlzoo.org" target="_blank"
        ><img class="penquins" src="${zooImage}" alt="Zoo"
      /></a>
    </div>
    <p>
      Since its inception in 1910, the Zoo has been renowned for its beautiful
      naturalistic exhibits and for its diverse collection of animals from the
      major continents and biomes of the world. It is widely recognized for its
      innovative approaches to animal management, wildlife conservation,
      research and education. Chosen as America's top free attraction and best
      zoo in USA TODAY 10Best Readers' Choice Awards, the Saint Louis Zoo is
      widely recognized for its innovative approaches to animal care and
      management, wildlife conservation, research and education.
    </p>
    <a
      class="address"
      href="https://www.mapquest.com/directions"
      target="_blank"
      >1 Government Dr, St. Louis, MO 63110</a
    >
    <hr />
    <div>
      <h2 class="places">Botanical Gardens</h2>
      <div>
        <a href="http://www.missouribotanicalgarden.org/" target="_blank"
          ><img
            class="imageBorder"
            src="${gardenImage}"
            alt="Picture of Busch Stadium"
        /></a>
      </div>
      <p>
        The Garden is a center for botanical research and science education, as
        well as an oasis in the city of St. Louis. The Garden offers 79 acres of
        beautiful horticultural display, including a 14-acre Japanese strolling
        garden, historic architecture, and one of the world's largest
        collections of rare and endangered flora.
      </p>

      <a
        class="address"
        href="https://www.mapquest.com/directions"
        target="_blank"
        >4344 Shaw Blvd, St. Louis, MO 63110</a
      >
    </div>
  </main>
`;
