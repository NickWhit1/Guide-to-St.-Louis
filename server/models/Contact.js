const mongoose = require("mongoose");
// const { Contact } = require("../../store");

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    enum: []
  },
  message: {
    type: String,
    required: true,
    enum: []
  }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
