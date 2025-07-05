import { customer, customerCreate } from "@/types/index";
import httpCommon from "../http-common";
export async function getAllCustomer() {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL_BACKEND + `/customers`;
  const response = await httpCommon.get(base_url);
  const data = response.data.data;
  return data;
}
export async function createNewCustomer(customerInfo: customerCreate) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/customers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_URL_TOKEN}`,
        },
        body: JSON.stringify({
          data: customerInfo,
        }),
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error?.message || "Login failed");
    }
    return data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
}
export async function getOneCustomer(id: number) {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND + `/customers/${id}`;
  const response = await httpCommon.get(base_url);
  const data = response.data.data;
  return data;
}
export async function getCustomerByUsername(id: number) {
  const currentUser = await getOneUser(id);
  const listCustomer = await getAllCustomer();
  const customer = listCustomer.find(
    (customer: customer) => customer.username === currentUser.username
  );
  if (!customer) {
    throw new Error("Not found customer");
  }
  return customer;
}
export async function getOneUser(id: number) {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL_BACKEND + `/users/${id}`;
  const response = await httpCommon.get(base_url);
  const data = response.data;
  return data;
}
