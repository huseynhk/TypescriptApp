import { ENDPOINTS } from "../constant/EndPoints";
import { instanceAxios } from "../helper/instanceAxios";
import {
  GetProducts,
  GetSingleProduct,
  AddProduct,
  DeleteProduct,
  EditProduct,
} from "../interfaces/data";

// GET All
export const getProducts: GetProducts = (params) => {
  return instanceAxios({ method: "GET", url: ENDPOINTS.POSTS, params });
};

// GET Single
export const getSingleProduct: GetSingleProduct = (productId) => {
  return instanceAxios({ method: "GET", url: ENDPOINTS.POST_ID(productId) });
};

// ADD
export const addProduct: AddProduct = (newProduct) => {
  return instanceAxios({
    method: "POST",
    url: ENDPOINTS.POSTS,
    data: newProduct,
  });
};

// EDIT
export const editProduct: EditProduct = (productId, updatedProduct) => {
  return instanceAxios({
    method: "PUT",
    url: ENDPOINTS.POST_ID(productId),
    data: updatedProduct,
  });
};

// DELETE
export const deleteProduct: DeleteProduct = (productId) => {
  return instanceAxios({ method: "DELETE", url: ENDPOINTS.POST_ID(productId) });
};
