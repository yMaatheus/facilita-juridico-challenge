import fastifyCors from "@fastify/cors";
import 'dotenv/config';
import fastify from "fastify";
import { parseEnv } from "../lib/env";
import CustomerController from "./controllers/customer.controller";
import { errorMiddleware } from "./middlewares/error.middleware";

const { PORT: port, HOST: host } = parseEnv(process.env);

const app = fastify();

app.register(fastifyCors, {
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
});

app.setErrorHandler(errorMiddleware);

app.post("/customer", CustomerController.create);
app.get("/customer", CustomerController.get);
app.get("/customer/route", CustomerController.calculateOptimizedRoute);

app.listen({ port, host }).then(() => console.log("HTTP server running!"));
