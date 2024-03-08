import fastify from "fastify";
import CustomerController from "./controllers/customer.controller";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = fastify();

app.setErrorHandler(errorMiddleware);

app.post("/customer", CustomerController.create);
app.get("/customer", CustomerController.getAll);
app.get("/customer/search", CustomerController.searchByField);

app.listen({ port: 3333 }).then(() => console.log("HTTP server running!"));
