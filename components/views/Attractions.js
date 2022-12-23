import html from "html-literal";
import buschStadiumImage from "../../image/buschStadium.jpg";
import zooImage from "../../image/penquins.jpg";
// import gardenImage from "../../image/botanicalGarden.jpg";

export default () => html`
  <main id="attractions">
    <!-- <h2>Attractions</h2> -->
    <h2>Busch Stadium</h2>
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

    <div>
      <img
        class="imageBorder"
        src="${buschStadiumImage}"
        alt="Picture of Busch Stadium"
      />
    </div>
    <a
      class="address"
      href="https://www.mapquest.com/directions"
      target="_blank"
      >700 Clark Ave, St. Louis, MO 63102</a
    >
    <hr />
    <h2>Zoo</h2>
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
    <div>
      <img class="penquins" src="${zooImage}" alt="Zoo" />
    </div>
  </main>
`;
