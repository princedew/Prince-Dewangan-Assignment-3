import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { axiosConfig } from "../config/axiosConfig";
import toast from "react-hot-toast";

async function addExpense(memberFormData) {
  const response = await axios.post(import.meta.env.VITE_ADD_EXPENSE, memberFormData, axiosConfig);
    return response.data;
}

export default function useAddExpense() {
  const mutation = useMutation({
    mutationFn: addExpense,
  });

  return mutation;
}
