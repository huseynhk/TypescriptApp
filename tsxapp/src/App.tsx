import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/Router";
import Home from "./components/admin/Home";
import AddItem from "./components/admin/AddItem";
import Detail from "./components/admin/Detail";
import UpdateItem from "./components/admin/UpdateItem";
import NotFound from "./components/pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.AddItem} element={<AddItem />} />
        <Route path={ROUTER.Detail + "/:id"} element={<Detail />} />
        <Route path={ROUTER.UpdateItem + "/:id"} element={<UpdateItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
