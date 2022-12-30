const { Router } = require("express");
// const { Contact } = require("../../store");
const Contact = require("../models/Contact");
const router = Router();

router.post("/", (request, response) => {
  const newContact = new Contact(request.body);
  newContact.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
router.get("/", (request, response) => {
  Pizza.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
