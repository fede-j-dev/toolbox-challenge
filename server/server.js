const express = require("express");
const app = express();

app.use("/apihost", require("./routes/routes"));

module.exports = app.listen(5000, () => {
  console.log("Server initialized on port 5000");
});
