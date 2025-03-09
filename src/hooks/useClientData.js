import { useQuery } from "@tanstack/react-query";
import { user_info } from "../lib/pocketbase";
import { pb } from "../lib/pocketbase";

export function useClientData() {
    const id = pb.authStore.record.id;
    return useQuery({
        queryFn: () => user_info(),
        queryKey: ["user_info", id],
        networkMode: "always"
    });
}