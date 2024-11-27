import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

interface CategoryBoxProps {
  place: string;
}

export const CategoryBox = ({ place }: CategoryBoxProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());

      
      const updatedQuery: any = {
        ...currentQuery,
        category: place,
      };

      if (params?.get("category") === place) {
        delete updatedQuery.category;
      }

      const url = qs.stringifyUrl(
        {
          url: "/search",
          query: updatedQuery,
        },
        { skipNull: true }
      );
      router.push(url);
    }
  }, [place, router, params]);
  return (
    <div onClick={handleClick} className="">
      {place}
    </div>
  );
};
