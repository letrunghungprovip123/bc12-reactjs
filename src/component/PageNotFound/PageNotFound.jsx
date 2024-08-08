import React from "react";
import PageNotFoundAnimation from "./../../assets/animation/PageNotFoundAnimation.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <Lottie
        style={{
          width: "600px",
          height: "600px",
        }}
        animationData={PageNotFoundAnimation}
        loops
      />
      ;<h2>Trang web bạn đang tìm kiếm không có vui lòng quay lại trang chủ</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-red-600 text-white py-2 px-5 rounded-lg"
      >
        Bấm vào đây để quay lại trang chủ
      </button>
      {/* <Link to={"/"} className="bg-red-600 text-white py-2 px-5 rounded-lg">
        Bấm vào đây để quay lại trang chủ
      </Link> */}
    </div>
  );
};

export default PageNotFound;
