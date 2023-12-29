import { getSingleProduct } from "../../services/index";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTER } from "../../constant/Router";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { Product } from "../../interfaces/data";

const Detail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  const fetchSingleProduct = async () => {
    try {
      const response = await getSingleProduct(Number(id));
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching single product:", error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  return (
    <section className=" py-20 ">
      {product ? (
        <div className="max-w-md border-cyan-400 border-2 rounded-xl  lg:max-w-3xl lg:flex font-poppins  shadow-xl shadow-cyan-950 bg-gray-900  mx-auto">
          <img
            className="w-full lg:w-1/2 lg:h-[555px]  object-cover"
            src={product.image}
          />
          <div className="py-3 w-full lg:w-1/2 capitalize text-gray-200 flex flex-col items-center text-lg lg:text-xl">
            <h3 className="text-red-100  dark:text-cyan-300 text-3xl mb-3 lg:mb-5 ">
              {product.title.slice(0, 20)}
            </h3>
            <p className="my-3 lg:my-4">price: {product.price} $</p>
            <p className="my-3 lg:my-4">Discount: {product.discountPrice} $</p>
            <p className="my-3 lg:my-4">
              total: {product.price - product.discountPrice} $
            </p>
            <p className="my-3 lg:my-4">rating: {product.rating}</p>
            <p className="text-green-300  dark:text-indigo-300 text-bold my-3 lg:my-6">
              category: {product.category}
            </p>

            <div
              className="h-10 w-20 rounded-md"
              style={{ backgroundColor: product.color }}
            ></div>

            <p className="my-3 lg:my-4">
              desc: {product.description.slice(0, 20)}...
            </p>
            <button
              onClick={() => navigate(ROUTER.Home)}
              className="flex items-center justify-center mt-2 mb-3 lg:mb-3 "
            >
              <FaCircleChevronLeft
                size={40}
                className=" hover:text-sky-300 transition-all duration-500"
              />
              <span className="ml-3   text-lg text-sky-200 dark:text-cyan-400 hover:opacity-80 transition-all duration-500">
                Go Back
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-black h-[450px] w-full">
          <h1 className="text-gega-red text-4xl capitalize">not found</h1>
        </div>
      )}
    </section>
  );
};

export default Detail;
