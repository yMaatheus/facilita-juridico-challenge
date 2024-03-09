import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import CustomerController from "./controllers/customer.controller";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = fastify();

app.register(fastifyCors, {
  origin: ['http://localhost:3000'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
});

app.setErrorHandler(errorMiddleware);

app.post("/customer", CustomerController.create);
app.get("/customer", CustomerController.get);
app.get("/customer/route", CustomerController.calculateOptimizedRoute)

app.listen({ port: 3333 }).then(() => console.log("HTTP server running!"));
