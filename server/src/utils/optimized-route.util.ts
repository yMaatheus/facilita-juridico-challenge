import { ICustomer } from "../domain/dto/ICustomer";

export function calculateDistance(
  customer1: ICustomer,
  customer2: ICustomer
): number {
  // Euclidean distance between coordinates
  const { x: x1, y: y1 } = customer1;
  const { x: x2, y: y2 } = customer2;
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export function findNearestCustomer(
  currentCustomer: ICustomer,
  remainingCustomers: ICustomer[]
) {
  let nearestCustomer: ICustomer | null = null;
  let shortestDistance = Infinity;

  remainingCustomers.forEach((customer) => {
    const distance = calculateDistance(currentCustomer, customer);
    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearestCustomer = customer;
    }
  });

  return nearestCustomer!;
}
