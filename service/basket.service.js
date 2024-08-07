import http from "@/api/interseptors";

export const add = async (id) => {
  try {
    const response = await http.post(`/basket`,id)

    return response;
  } catch (error) {
    console.error("Failed to add to basket:", error);
  }
};

export const get = async () => {
  try {
    const response = await http.get("/user-baskets");

    return response.data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


export const remove = async (id) => {
   http.post("/basket", { productId: id })
};
