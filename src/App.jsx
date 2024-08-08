import { Route, Routes } from "react-router-dom";
import BaiTap1Props from "./component/BaiTap/BaiTap1Props";
import BaiTapHienThiDienThoai from "./component/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import ShoeDetail from "./component/ShoeDetail";
import useRouteCustom from "./routes/useRouteCustom";
import { message } from "antd";
import React from "react" 

export const NotificationContext = React.createContext();
function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const routes = useRouteCustom();
  const handleNotification = (status, content) => {
    messageApi.open({
      type: status,
      content,
    });
  };
  return (
    <>
      <NotificationContext.Provider
        value={{
          handleNotification,
        }}
      >
        {contextHolder}
        {routes}
      </NotificationContext.Provider>
    </>
  );
  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<HomeTemplate />}>
  //         <Route index element={<BaiTap1Props />} />
  //         <Route
  //           path="bai-tap-hien-thi-dien-thoai"
  //           element={<BaiTapHienThiDienThoai />}
  //         />
  //         <Route path="shoe-detail/:id" element={<ShoeDetail />} />
  //         <Route path="*" element={<PageNotFound />} />
  //       </Route>
  //     </Routes>
  //   </>
  // );
}

export default App;
