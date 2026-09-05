import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../config/axiosConfig.js";
import { url } from "../config/url.js";
import toast from "react-hot-toast";

async function fetchSummary() {
  const response = await axios.get(url.URL_FETCH_SUMMARY, axiosConfig);
  return response.data;
}

export default function useSummary() {
  return useQuery({
    queryKey: ["summary"],
    queryFn: fetchSummary,
  });
}
