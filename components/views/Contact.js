import html from "html-literal";

export default () => html`
  <section id="contacts">
    <form
      class="contact"
      action=""
      method="POST"
    >
      <label class="info">
        Your email:
        <input type="email" name="email" />
      </label>
      <label class="info">
        Your message:
        <textarea name="message" rows="6" maxlength="3000"></textarea>
      </label class="info" >
      <input class="submit" type="submit" name="submit" value="submit"/>

      </form>
  </section>
`;
