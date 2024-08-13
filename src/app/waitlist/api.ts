import axios from "axios";
import { BASE_URL } from "../../../config";

// const BASE_URL = "https://adca-114-143-222-190.ngrok-free.app/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const joinWaitlist = async (data: any) => {
  console.log(data);
  const res = await axiosInstance.post("join_waitlist", data);
  return res.data;
};
