import axios from "axios";

export const doctorApi = axios.create({
  baseURL: "https://63c15b437165626718791c6c.mockapi.io/challenge/api/doctors"
});
