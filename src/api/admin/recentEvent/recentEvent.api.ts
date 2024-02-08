import axios from "axios";
export const getRecentEvents = async () => {
  try {
    const response = await axios.get(
      "https://event-360-server-alpha.vercel.app/api/v1/recent-event/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recent events:", error);
    throw new Error("Failed to fetch recent events");
  }
};
