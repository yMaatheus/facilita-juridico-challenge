import fastify from "fastify";
import CustomerController from "./controllers/customer.controller";

const app = fastify();

app.post("/customer", CustomerController.create);
app.get("/customer", CustomerController.getAll);
app.get("/customer/search", CustomerController.searchByField);

app.listen({ port: 3333 }).then(() => console.log("HTTP server running!"));
