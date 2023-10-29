const API_KEY = import.meta.env.VITE_APOD_API_KEY || "DEMO_KEY";

export const getImages = async (startDate: string, endDate: string) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
