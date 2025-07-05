import {
  parkingregistrationdetail,
  parkingregistrationdetailCreate,
} from "@/types";
import httpCommon from "../http-common";
export async function getAllParkingRegistrationDetail() {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND + "/parking-registration-details";
  const response = await httpCommon.get(base_url);
  const data = response.data.data;
  return data;
}
export async function createNewParkingRegistrationDetail(
  parkingregistrationdetail: parkingregistrationdetailCreate
) {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND + "/parking-registration-details";
  const response = await httpCommon.post(base_url, {
    data: parkingregistrationdetail,
  });
  const data = response.data.data;
  return data;
}
export async function getOneParkingRegistrationDetail(prdetailId: string) {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND +
    `/parking-registration-details/${prdetailId}`;
  const response = await httpCommon.get(base_url);
  const data = response.data.data;
  return data;
}
export async function deleteParkingRegistrationDetail(prdetailId: string) {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND +
    `/parking-registration-details/${prdetailId}`;
  const response = await httpCommon.delete(base_url);
  const data = response.data.data;
  return data;
}
export async function updateParkingRegistrationDetail(
  prdetailId: string,
  parkingregistrationdetail: parkingregistrationdetail
) {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND +
    `/parking-registration-details/${prdetailId}`;
  const response = await httpCommon.put(base_url, parkingregistrationdetail);
  const data = response.data.data;
  return data;
}
