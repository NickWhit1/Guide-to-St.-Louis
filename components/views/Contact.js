import html from "html-literal";

export default () => html`
  <section id="contacts">
    <form
      class="contact"
      action="https://formspree.io/f/mnqyakqq"
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
      <button type="submit">Send</button>
      <!-- your other form fields go here -->


    </form>
  </section>
`;
