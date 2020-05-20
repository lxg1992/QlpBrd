const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const webpack = require("webpack");
const morgan = require("morgan");
const mountRoutes = require("./routes");
const webpackConfig = require("../webpack.config");
const compiler = webpack(webpackConfig);

const app = express();

app.use(
  morgan(":method :url :status :response-time ms - :res[content-length]")
);
app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(require("webpack-hot-middleware")(compiler));

const PORT = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
app.use(express.static(DIST_DIR));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mountRoutes(app);

const mockResponse = {
  foo: "bar",
  bar: "foo",
};
app.get("/test", (req, res) => {
  res.send(mockResponse);
});
app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
