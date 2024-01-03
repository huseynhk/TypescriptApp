import { useState, useEffect } from "react";
import { getProducts } from "../services/index";
import { Product } from "../interfaces/data";

const useFetchProducts = () => {
  const [datas, setDatas] = useState<Product[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setDatas(response.data);
    } catch (error) {
      setError("Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { datas, loading, error, fetchProducts };
};

export default useFetchProducts;
