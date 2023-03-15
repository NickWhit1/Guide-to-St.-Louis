import html from "html-literal";

export default () => html`
  <footer class="footer">
    <a href="Contact" target="">Contact</a>
    <a id="about" href="about" target="_blank">About</a>
    <a class="top" href="#">Jump to top</a>
    &copy; <em id="date">SavvyCoders</em>
  </footer>
`;
