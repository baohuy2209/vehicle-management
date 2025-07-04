import httpCommon from "../http-common";
import { user } from "@/types/index";
export async function login(username: string, password: string) {
  const loginInfo = {
    identifier: username,
    password: password,
  };
  const base_url = process.env.NEXT_PUBLIC_BASE_URL_BACKEND + "/auth/local";
  const response = await httpCommon.post(base_url, loginInfo);
  const data = response.data.data;
  return data;
}
export async function register(user: user) {
  const base_url =
    process.env.NEXT_PUBLIC_BASE_URL_BACKEND + "/auth/local/register";
  const response = await httpCommon.post(base_url, user);
  const data = response.data.data;
  return data;
}
