import axios from "axios";

export async function Posts() {
  try {
    const response = await axios.get(
      "https://matias-romoli.onrender.com/api/posts"
    );
    return await response.data;
  } catch (error) {
    console.error("Error al obtener las publicaciones:", error);
    return [];
  }
}
