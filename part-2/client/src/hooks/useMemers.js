import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../config/axiosConfig";
import { url } from "../config/url.js";

async function fetchMembers() {
    const response = await axios.get(url.URL_FETCH_MEMBERS, axiosConfig);
    return response.data
}

export default function useMembers() {
    return useQuery({
        queryKey:["members"],
        queryFn: fetchMembers,
    })
}