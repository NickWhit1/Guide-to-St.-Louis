import html from "html-literal";
import buschStadiumImage from "../../image/buschStadium.jpg";
import zooImage from "../../image/penquins.jpg";

export default () => html`
  <main id="attractions">
    <!-- <h2>Attractions</h2> -->
    <h3>Busch Stadium</h3>
    <div>
      <img
        class="imageBorder"
        src="${buschStadiumImage}"
        alt="Picture of Busch Stadium"
      />
    </div>
    <h3>Zoo</h3>
    <div>
      <img src="${zooImage}" alt="Zoo" />
    </div>
  </main>
`;
