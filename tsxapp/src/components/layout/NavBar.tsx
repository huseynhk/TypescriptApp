import { Link } from "react-router-dom";
import { activeLink } from "../../utils/ActiveLink";
import { useLocation } from "react-router-dom";
import { ROUTER } from "../../constant/Router";
import { FaShopify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getTotalAmount } from "../../features/slices/productSlice";

const NavBar: React.FC = () => {
  const totalAmount = useSelector(getTotalAmount);
  const { pathname } = useLocation();
  return (
    <div className="p-6 bg-gray-800 text-gray-200 text-xl font-poppins capitalize">
      <div className="flex justify-center items-center">
        <span className="  hover:text-blue-400 transition duration-500 text-3xl">
          <Link
            to={ROUTER.Home}
            className={
              activeLink(ROUTER.Home, pathname)
                ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
            }
          >
            Table
          </Link>
        </span>
        <span className=" hover:text-blue-400 transition duration-500 text-3xl mx-4">
          <Link
            to={ROUTER.AddItem}
            className={
              activeLink(ROUTER.AddItem, pathname)
                ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
            }
          >
            Add
          </Link>
        </span>
        <span className=" hover:text-blue-400 transition duration-500 text-3xl">
          <Link
            to={ROUTER.Product}
            className={
              activeLink(ROUTER.Product, pathname)
                ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
            }
          >
            Products
          </Link>
        </span>
        <span className=" hover:text-blue-400 transition duration-500 text-3xl ms-4">
          <Link
            to={ROUTER.Basket}
            className={
              activeLink(ROUTER.Basket, pathname)
                ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
            }
          >
            <div className="flex">
              <span>
                <FaShopify size={40} />
              </span>
              <span className="bg-gega-red h-6 w-6 text-xl rounded-full flex justify-center items-center">
                <span> {totalAmount}</span>
              </span>
            </div>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
