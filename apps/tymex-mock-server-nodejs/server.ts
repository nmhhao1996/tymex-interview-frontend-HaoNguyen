import * as jsonServer from "json-server";
import "dotenv/config";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT ?? 3000;
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`JSON Server is running at http://localhost:${port}`);
});
