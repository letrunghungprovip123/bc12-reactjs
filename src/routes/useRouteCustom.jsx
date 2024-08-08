import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../template/HomeTemplate/HomeTemplate";
import PageNotFound from "../component/PageNotFound/PageNotFound";
import BaiTap1Props from "../component/BaiTap/BaiTap1Props";
import ShoeDetail from "../component/ShoeDetail";
import BaiTapHienThiDienThoai from "../component/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai";
import { path } from "../assets/common/path";
import DemoRedux from "../component/DemoRedux/DemoRedux";
import BaiTapLacXiNgau from "../component/BaiTap/BaiTapLacXiNgau/BaiTapLacXiNgau";
import DemoUseEffect from "../component/DemoUseEffect/DemoUseEffect";
import DemoUseEffectDetail from "../component/DemoUseEffect/DemoUseEffectDetail";
import DemoFormReact from "../component/DemoFormReact/DemoFormReact";

const useRouteCustom = () => {
  const elements = useRoutes([
    {
      path: path.homePage,
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <BaiTap1Props />,
        },
        {
          path: path.baiTapDienThoai,
          element: <BaiTapHienThiDienThoai />,
        },
        {
          path: path.shoeDetail,
          element: <ShoeDetail />,
        },
        {
          path: path.demoRedux,
          element: <DemoRedux />,
        },
        {
          path: path.baiTapLacXiNgau,
          element: <BaiTapLacXiNgau />,
        },
        {
          path: "/demo-useEffect",
          element: <DemoUseEffect />,
        },
        {
          path: "/demo-use-effect-detail/:id",
          element: <DemoUseEffectDetail />,
        },
        {
          path: "/demo-form-react",
          element: <DemoFormReact />
        }
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return elements;
};

export default useRouteCustom;
