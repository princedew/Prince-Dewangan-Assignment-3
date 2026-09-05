import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../config/axiosConfig";
import { url } from "../config/url.js";
import toast from "react-hot-toast";

async function fetchExpense(paidBy, search, limit, offset) {
  const response = await axios.get(url.URL_FETCH_EXPENSE, {
    ...axiosConfig,
    params: {
      paidBy,
      search,
      limit,
      offset,
    },
  });
  return response.data;
}

export default function useExpense(paidBy, search, limit, offset) {
  return useQuery({
    queryKey: ["expense", paidBy, search, limit, offset],
     queryFn: () => fetchExpense(
      paidBy,
      search,
      limit,
      offset
    ),
  });
}
