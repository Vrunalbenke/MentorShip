import { useMutation } from "@tanstack/react-query";
import { joinWaitlist } from "./api";

const useJoinWaitlist = (onSuccess: (data: any) => void) => {
  const { mutate: joinWL, ...rest } = useMutation({
    mutationFn: (data: any) => joinWaitlist(data),
    onError: (error) => {},
    onSuccess: (data: any) => {
      onSuccess(data);
    },
  });
  return { joinWL, ...rest };
};

export { useJoinWaitlist };
