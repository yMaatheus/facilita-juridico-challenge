import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import customerService from "../../domain/services/customer.service";

export default class CustomerController {
  static async create(request: FastifyRequest, reply: FastifyReply) {
    const createCustomerBody = z.object({
      name: z.string().min(3),
      email: z.string().email(),
      phone: z
        .string()
        .regex(
          /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/,
          "Invalid phone number"
        ),
      x: z.coerce
        .number()
        .int()
        .refine((value) => value !== 0, { message: "X cannot be 0" }),
      y: z.coerce
        .number()
        .int()
        .refine((value) => value !== 0, { message: "X cannot be 0" }),
    });

    const { name, email, phone, x, y } = createCustomerBody.parse(request.body);

    const customerId = await customerService.create({
      name,
      email,
      phone,
      x,
      y,
    });

    return reply.status(201).send({ customerId });
  }

  static async get(request: FastifyRequest, reply: FastifyReply) {
    const customerQuerySchema = z.object({
      search: z.string().optional(),
    });

    const { search } = customerQuerySchema.parse(request.query);

    if (search) {
      const customers = await customerService.searchByField(search);

      return reply.send(customers);
    }

    const customers = await customerService.getAll();

    return reply.send(customers);
  }
}
