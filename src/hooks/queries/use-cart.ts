import { useQuery } from "@tanstack/react-query";

import { getCart } from "@/actions/get-cart";

export const getUseCardQueryKey = () => ["cart"] as const;

export const useCart = () => {
  return useQuery({
    queryKey: getUseCardQueryKey(),
    queryFn: () => getCart(),
  });
};
