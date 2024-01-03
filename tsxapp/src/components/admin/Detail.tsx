import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTER } from "../../constant/Router";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { copyColorCode } from "../../utils/CopyColor";
import useFetchSingleProduct from "../../hooks/GetSingle";

const Detail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { product, loading, error } = useFetchSingleProduct(Number(id));

  if (loading) {
    return <p className="m-20 text-red-300 text-xl ">Loading...</p>;
  }

  if (error) {
    return <p className="m-20 text-red-300 text-xl ">Error: {error}</p>;
  }

  if (!product) {
    return <p className="m-20 text-red-300 text-xl ">No product found.</p>;
  }

  return (
    <section className="py-10">
      <h1 className="text-center text-4xl text-cyan-300 mb-8">Detail Page</h1>

      {product && (
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
              className="h-10 w-20 rounded-md cursor-pointer"
              style={{ backgroundColor: product.color }}
              onClick={() => copyColorCode(product.color)}
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
      )}
    </section>
  );
};

export default Detail;
