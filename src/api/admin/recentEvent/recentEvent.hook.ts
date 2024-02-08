import { useQuery } from "@tanstack/react-query";
import { getRecentEvents } from "./recentEvent.api";

export const useGetRecentEvents = () => {
  const recentEventsData = useQuery({
    queryKey: ["recentEvents"],
    queryFn: getRecentEvents,
    select: (data) => {
      const recentEvents = data.data.map(
        (item: { _id: any; image: any }, index: any) => ({
          id: item._id,
          img: item.image,
          index: index,
        })
      );
      return recentEvents;
    },
  });
  return recentEventsData;
};
