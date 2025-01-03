import axios from "axios";

export async function Posts() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
    return await response.data;
  } catch (error) {
    console.error("Error al obtener las publicaciones:", error);
    return [];
  }
}
