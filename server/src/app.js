// const express = require("express");
// const bodyParser = require("body-parser");
// // const mongoose = require()
// const path = require("path");
// const cors = require("cors");
// const morgan = require("morgan");
// // const api = require("./routes/api");
// const { planetRouter } = require("./routes/planets/planets.router");
// const launchesRouter = require("./routes/launches/launches.routers");

// // const api = express.Router();

// const app = express();
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );
// app.use(morgan("combined"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// // app.use("/v1", api);
// app.use("/v1/planets", planetRouter);
// app.use("/v1/launches", launchesRouter);
// app.use(express.static(path.join(__dirname, "..", "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });
// module.exports = app;
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const api = require("./routes/api");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
