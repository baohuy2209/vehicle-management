import { parkingregistration, parkingregistrationCreate } from "@/types";
import httpCommon from "../http-common";
import { AxiosError } from "axios";
export async function getAllParkingRegistration() {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND + "/parking-registrations";
  const response = await httpCommon.get(base_url);
  const data = response.data.data;
  return data;
}
export async function createNewParkingRegistration(
  parkingregistration: parkingregistrationCreate
) {
  try {
    const base_url =
      process.env.NEXT_PUBLIC_BASE_URL_BACKEND + "/parking-registrations";
    const response = await httpCommon.post(base_url, {
      data: parkingregistration,
    });
    const data = response.data.data;
    return data;
  } catch (err) {
    console.log(
      (err as Error).message ||
        (err as AxiosError<any, unknown>)?.response?.data.error.message
    );
  }
}
export async function getOneParkingRegistration(prId: string) {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND + `/parking-registrations/${prId}`;
  const response = await httpCommon.get(base_url);
  const data = response.data.data;
  return data;
}
export async function deleteParkingRegistration(prId: string) {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND + `/parking-registrations/${prId}`;
  const response = await httpCommon.delete(base_url);
  const data = response.data.data;
  return data;
}
export async function updateParkingRegistration(
  prId: string,
  parkingregistration: parkingregistration
) {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND + `/parking-registrations/${prId}`;
  const response = await httpCommon.put(base_url, parkingregistration);
  const data = response.data.data;
  return data;
}
