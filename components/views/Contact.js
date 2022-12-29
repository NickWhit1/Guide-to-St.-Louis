import html from "html-literal";

export default () => html`
  <section>
      <form class="contact" method="post" action="contact">
        <div >
            <label class="info" for="Name" >Name</label>
            <div>
                <input type="text" id="Name" name="Name"  required>
            </div>
        </div>
        <div >
            <label class="info" for="Email">Email</label>
            <div>
                <input type="email" id="Email" name="Email"  required>
            </div>
        </div>
        <div >
            <label class="info" for="Message">Message</label>
            <div>
                <textarea class="contact" name="Message"  rows="6" maxlength="3000" required></textarea>
            </div>
        </div>
        <div>
            <button type="submit">Send</button>
        </div>
      </form>
    </div>
  </section>
`;
