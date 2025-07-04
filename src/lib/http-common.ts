import axios from "axios";
export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_BACKEND,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_BACKEND_URL_TOKEN}`,
  },
});
