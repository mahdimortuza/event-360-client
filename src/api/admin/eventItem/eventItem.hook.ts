import { useQuery } from "@tanstack/react-query";
import { getEventItems } from "./eventItem.api";

export const useGetEventItems = () => {
  const yData = useQuery({
    queryKey: ["eventItems"],
    queryFn: getEventItems,
    select: (data) => {
      const eventItems = data.data.map(
        (item: { _id: any; image: any; title: any }, index: any) => ({
          id: item._id,
          img: item.image,
          title: item.title,
          index: index,
        })
      );
      return eventItems;
    },
  });
  return yData;
};
