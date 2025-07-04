import { parkingregistration } from "@/types";
import httpCommon from "../http-common";
export async function getAllParkingRegistration() {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND + "/parking-registrations";
  const response = await httpCommon.get(base_url);
  const data = response.data.data;
  return data;
}
export async function createNewParkingRegistration(
  parkingregistration: parkingregistration
) {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND + "/parking-registrations";
  const response = await httpCommon.post(base_url, parkingregistration);
  const data = response.data.data;
  return data;
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
