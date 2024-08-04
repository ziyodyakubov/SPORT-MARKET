import http from "@/api/interseptors";

export const get = async () => {
  try {
    const response = await http.get("/products", { 
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

export const like = async (id) => {
  try {
    const response = await http.post(`/like/${id}`);
    return response
  } catch (error) {
    console.error("Error liking the product:", error);
  }
};

export const add = async (id) => {
  try {
    const response = await http.post(`/basket`,id)

    return response;
  } catch (error) {
    console.error("Failed to add to basket:", error);
  }
};

export const single = async (id) => {
  try{
    const response = await http.get(`/product/${id}`);
  
    return response.data;
  }catch(error){
    console.log(error)
  }
};


