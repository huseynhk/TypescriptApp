import { getProducts, deleteProduct } from "../../services/index";
import { Product } from "../../interfaces/data";
import { useState, useEffect } from "react";
import moment from "moment";
import { FaCircleChevronRight, FaRegTrashCan, FaPen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../constant/Router";
import { toast } from "react-toastify";

const Home: React.FC = () => {
  const [data, setData] = useState<Product[]>();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setData(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const removeProduct = async (productId: number) => {
    try {
      await deleteProduct(productId);
      toast.success("Product deleted successfully!", {
        autoClose: 1000,
      });
      fetchProducts();
    } catch (error) {
      console.error(`Error deleting product`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4 ">
      <div className="relative overflow-x-auto">
        <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.No
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>

              <th scope="col" className="px-6 py-3">
                Discount
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>

              <th scope="col" className="px-6 py-3">
                Category
              </th>

              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Added_Time
              </th>
              <th scope="col" className="px-6 py-3">
                Wiew
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="mt-4 w-full min-w-max table-auto text-left">
            {data && data.length > 0 ? (
              data.map((product, index) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">{product.title}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">${product.discountPrice}</td>
                  <td className="px-6 py-4">{product.rating}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">
                    <div
                      className="h-10 w-10 rounded-full"
                      style={{ backgroundColor: product.color }}
                    ></div>
                  </td>
                  <td className="p-3">
                    <img
                      className="h-12 w-20 object-cover rounded-sm"
                      src={product.image}
                      alt={product.title}
                    />
                  </td>
                  <td className="px-3 py-4 ">
                    {moment(product?.create_at).fromNow()}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="text-cyan-700   hover:opacity-60 duration-500"
                      onClick={() => navigate(`${ROUTER.Detail}/${product.id}`)}
                    >
                      <FaCircleChevronRight size={45} />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="px-5 py-1 bg-blue-700 rounded-sm hover:opacity-75 transition-all duration-500"
                      onClick={() =>
                        navigate(`${ROUTER.UpdateItem}/${product.id}`)
                      }
                    >
                      <FaPen size={20} />
                    </button>
                    <button
                      className="px-5 py-1 bg-red-700 rounded-sm mt-2 hover:opacity-75 transition-all duration-500"
                      onClick={() => removeProduct(product.id)}
                    >
                      <FaRegTrashCan size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
