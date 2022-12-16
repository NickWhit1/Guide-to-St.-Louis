const express = require("express");
const app = express();
// Request handlers go here

// app.get("/status", (request, response) => {
//   response.send(JSON.stringify({ message: "Service healthy" }));
// });

app.route("/status").get((request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

app.listen(4040, () => console.log("Listening on port 4040"));

app.use(express.json());
// app.use(/logging);
