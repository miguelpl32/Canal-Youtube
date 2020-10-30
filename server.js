const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(`${__dirname} + /dist/youtuveapp`));
app.get("/*", function (req, res) {
  res.sendFile(path.join(`./dist/youtubeapp/index.html`));
});
app.listen(process.env.PORT || 3000);
