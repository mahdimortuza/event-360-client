import axios from "axios";
export const getServices = async () => {
  try {
    const response = await axios.get(
      "https://event-360-server-alpha.vercel.app/api/v1/services"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw new Error("Failed to fetch services");
  }
};
