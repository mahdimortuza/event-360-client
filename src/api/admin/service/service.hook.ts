import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";

export const useGetServices = () => {
  const servicesData = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    select: (data) => {
      const services = data.data.map(
        (
          item: {
            _id: any;
            image: any;
            title: any;
            feature1: any;
            feature2: any;
            feature3: any;
            feature4: any;
            feature5: any;
          },
          index: any
        ) => ({
          id: item._id,
          img: item.image,
          title: item.title,
          feature1: item.feature1,
          feature2: item.feature2,
          feature3: item.feature3,
          feature4: item.feature4,
          feature5: item.feature5,
          index: index,
        })
      );
      return services;
    },
  });
  return servicesData;
};
