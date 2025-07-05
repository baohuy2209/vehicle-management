import { location } from "@/types";
import httpCommon from "../http-common";

export async function createNewLocation(location: location) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/locations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_URL_TOKEN}`,
        },
        body: JSON.stringify({
          data: location,
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
export async function getAllLocation() {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND +
    "/locations?pagination[limit]=100";
  const response = await httpCommon.get(base_url);
  const data = response.data.data;
  return data;
}
export async function getLocationAvailable() {
  const list_location = await getAllLocation();
  const list_location_available = list_location.filter(
    (location: location) => location.status === "available"
  );
  return list_location_available;
}
