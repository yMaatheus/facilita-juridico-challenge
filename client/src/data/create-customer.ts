"use server";

import { ICustomerCreateResponse } from "@/interfaces/responses/ICustomerCreateResponse";
import { api } from "@/lib/api";
import { revalidateTag } from "next/cache";
import { ZodError, z } from "zod";

export async function createCustomer(_: unknown, formData: FormData) {
  try {
    const schema = z.object({
      name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
      email: z.string().email("E-mail inválido"),
      phone: z
        .string()
        .regex(
          /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/,
          "Númerio de telefone inválido"
        ),
      x: z.coerce
        .number()
        .int()
        .refine((value) => value !== 0, { message: "X não pode ser 0" }),
      y: z.coerce
        .number()
        .int()
        .refine((value) => value !== 0, { message: "Y não pode ser 0" }),
    });

    const { name, email, phone, x, y } = schema.parse(
      Object.fromEntries(formData)
    );
    
    await api<ICustomerCreateResponse>("/customer", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, x, y }),
    });

    revalidateTag("customer");
    return { succeededAt: new Date(), errors: null };
  } catch (error) {
    if (error instanceof ZodError) {
      return { succeededAt: null, errors: error.flatten().fieldErrors };
    }
    return { succeededAt: null, errors: null };
  }
}
