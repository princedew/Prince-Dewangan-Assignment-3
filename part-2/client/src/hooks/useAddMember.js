import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { axiosConfig } from "../config/axiosConfig";
import toast from "react-hot-toast";

async function addMember(memberFormData) {
  const response = await axios.post(import.meta.env.VITE_ADD_MEMBER, memberFormData, axiosConfig);
    return response.data;
}

export default function useAddMember() {
  const mutation = useMutation({
    mutationFn: addMember,
  });

  return mutation;
}
