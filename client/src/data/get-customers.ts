'use server'

import { ICustomerResponse } from "@/interfaces/responses/ICustomerResponse";
import { api } from "@/lib/api";

export async function getCustomers() {
  try {
    const { data } = await api<ICustomerResponse[]>(`/customer`, {
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