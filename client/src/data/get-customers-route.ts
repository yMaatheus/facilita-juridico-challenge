'use server'
import { ICustomerResponse } from "@/interfaces/responses/ICustomerResponse";
import { api } from "@/lib/api";

export async function getCustomersRoute() {
  try {
    const { data } = await api<ICustomerResponse[]>('/customer/route', {
      next: {
        revalidate: 3,
        tags: ['customer'],
      },
    })

    return data;
  } catch (error) {
    console.error(error);
    return []
  }
}