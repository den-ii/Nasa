const http = require("http");
require("dotenv").config();
const { mongoConnect } = require("./services/mongo");
const app = require("./app");
const { loadPlanets } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startUp() {
  await mongoConnect();
  await loadPlanets();
  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
}

startUp();
