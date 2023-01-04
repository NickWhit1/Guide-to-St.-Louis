import html from "html-literal";

export default state => html`
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
      <input type="submit" name="submit" value="submit"/>

      </form>
  </section>
`;
