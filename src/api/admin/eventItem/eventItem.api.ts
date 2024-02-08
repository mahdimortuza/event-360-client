import axios from "axios";
export const getEventItems = async () => {
  try {
    const response = await axios.get(
      "https://event-360-server-alpha.vercel.app/api/v1/event-item"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching event items:", error);
    throw new Error("Failed to fetch event items");
  }
};
