import http from "@/api/interseptors";

export const like = async (id) => {
  try {
    const response = await http.post(`/like/${id}`);
    return response
  } catch (error) {
    console.error("Error liking the product:", error);
  }
};

export const unlike = async (id) => {
  try {
    const response = await http.post(`/like/${id}`);
    
    if (response.status === 200 || response.status === 201) {
      const likedProducts = response.data.likedProducts;

      const filteredProducts = likedProducts.filter(product => product.id !== id);

      return filteredProducts;
    }
  } catch (error) {
    console.error("Error unliking the product:", error);
  }
};

export const get = async () => {
  try {
    const response = await http.get("/wishlist", { 
      params: {
        limit: 20,
        page: 1
      }
    });

    return response.data.products

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};