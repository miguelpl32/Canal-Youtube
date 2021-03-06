const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(`${__dirname}/dist/youtubeApp`));
app.get("/*", function (req, res) {
  res.sendFile(path.join(`./dist/youtubeApp/index.html`));
});
app.listen(process.env.PORT || 3000);
