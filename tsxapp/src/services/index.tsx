import { AxiosPromise } from "axios";
import { instanceAxios } from "../helper/instanceAxios";
import { Product, InitialStateType } from "../interfaces/data";

interface ProductParams {
  category: string;
  discountPrice?: number;
}

// GET
interface GetProducts {
  (params?: Partial<ProductParams> | undefined): AxiosPromise<Product[]>;
}
export const getProducts: GetProducts = (params) => {
  return instanceAxios({ method: "GET", url: "/posts", params });
};

// GET Single
interface GetSingleProduct {
  (productId: number): AxiosPromise<Product>;
}
export const getSingleProduct: GetSingleProduct = (productId) => {
  return instanceAxios({ method: "GET", url: `/posts/${productId}` });
};

// ADD
interface AddProduct {
  (newProduct: InitialStateType): AxiosPromise<Product>;
}
export const addProduct: AddProduct = (newProduct) => {
  return instanceAxios({ method: "POST", url: "/posts", data: newProduct });
};

// DELETE
interface DeleteProduct {
  (productId: number): AxiosPromise<void>;
}
export const deleteProduct: DeleteProduct = (productId) => {
  return instanceAxios({ method: "DELETE", url: `/posts/${productId}` });
};