import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import customerService from "../../domain/services/customer.service";

const PHONE_REGEX =
  /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;

export default class CustomerController {
  static async create(request: FastifyRequest, reply: FastifyReply) {
    const createCustomerBody = z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.string().regex(PHONE_REGEX, "Invalid phone number"),
      x: z.number().int(),
      y: z.number().int(),
    });

    const { name, email, phone, x, y } = createCustomerBody.parse(request.body);

    const customerId = await customerService.create({ name, email, phone, x, y });

    return reply.status(201).send({ customerId });
  }

  static async getAll(_request: FastifyRequest, reply: FastifyReply) {
    const customers = await customerService.getAll();

    return reply.send(customers);
  }

  static async searchByField(request: FastifyRequest, reply: FastifyReply) {
    const customerQuerySchema = z.object({
      search: z.string(),
    })

    const { search } = customerQuerySchema.parse(request.query);

    const customers = await customerService.searchByField(search);

    return reply.send(customers);
  }
}
