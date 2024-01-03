import { FaRegEye } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { FaShopify } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/productSlice";
import { ROUTER } from "../../constant/Router";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import useFetchProducts from "../../hooks/GetCustom";
import { getBasket } from "../../features/slices/productSlice";
import { copyColorCode } from "../../utils/CopyColor";

const Products: React.FC = () => {
  const { datas, loading, error } = useFetchProducts();
  const basket = useSelector(getBasket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (loading) {
    return <p className="m-20 text-red-300 text-xl ">Loading...</p>;
  }

  if (error) {
    return <p className="m-20 text-red-300 text-xl ">Error: {error}</p>;
  }

  return (
    <>
      <Layout>
        <div className="container grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-14">
          {datas && datas.length > 0 ? (
            datas.map((product) => {
              const productExist = basket.find(
                (exist) => exist.id === product.id
              );

              return (
                <div className="w-full max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="w-full h-60 object-cover rounded-t-lg"
                    src={product.image}
                    alt={product.title}
                  />

                  <div className="px-5 py-5 flex justify-between items-center">
                    <div>
                      <h3 className="text-cyan-300">{product.title}</h3>
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.description}
                      </h5>
                      <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse text-cyan-300">
                          {product.category}
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                          {product.rating}
                        </span>
                      </div>
                      <div className="flex  items-center justify-between">
                        <p className="flex flex-col items-center justify-between">
                          <span className="text-xl font-bold  text-gray-900 dark:text-white">
                            Price: ${product.price}
                          </span>
                          <span className="text-xl font-bold text-gray-900 dark:text-white">
                            Now: ${product.price - product.discountPrice}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col  items-center justify-center">
                      <div
                        className="h-8 w-20 rounded cursor-pointer"
                        style={{ backgroundColor: product.color }}
                        onClick={() => copyColorCode(product.color)}
                      ></div>
                      <button
                        className="px-6 py-1 bg-gray-700 rounded-md my-5 hover:opacity-70 transition-all duration-500"
                        onClick={() =>
                          navigate(`${ROUTER.ProductDetail}/${product.id}`)
                        }
                      >
                        <FaRegEye size={30} color={"white"} />
                      </button>
                      <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md transition-all duration-500  px-6 py-1 text-center dark:bg-indigo-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() =>
                          dispatch(
                            addToCart({
                              ...product,
                              amount: 1,
                              totalAmount: 1,
                              totalPrice: product.price,
                              totalDiscountPrice: product.discountPrice,
                            })
                          )
                        }
                      >
                        {productExist ? (
                          <FaShopify size={30} color={"white"} />
                        ) : (
                          <SlBasketLoaded size={30} color={"white"} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Products;
