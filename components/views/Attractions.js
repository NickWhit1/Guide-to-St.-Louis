import html from "html-literal";
import buschStadiumImage from "../../image/buschStadium.jpg";
import zooImage from "../../image/penquins.jpg";

export default () => html`
  <main id="attractions">
    <h2>Attractions</h2>
    <h3>Busch Stadium</h3>
    <div>
      <img
        class="imageborder"
        src="${buschStadiumImage}"
        alt="Picture of Busch Stadium"
      />
    </div>

    <!-- <ul>
      <li>lorem</li>
      <li>lorem</li>
      <li></li>
    </ul> -->
    <h2>
      <div>
        <h2>Zoo</h2>
      </div>
      <img src="${zooImage}" alt="Zoo" />
    </h2>
  </main>
`;
