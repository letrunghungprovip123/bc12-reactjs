import React from "react";
import { useSelector } from "react-redux";
const KetQua = () => {
  const { tongSoBanThang, tongSoBanChoi, banChon } = useSelector(
    (state) => state.xiNgauSlice
  );
  return (
    <div className="ketQua">
      <p>Bạn chọn:{" "}
        <span className="text-red-500 ml-3">{banChon ? "Tài":"Xỉu"}</span>
      </p>
      <p>Tổng số bàn thắng: {tongSoBanThang}</p>
      <p>Tổng số bàn chơi: {tongSoBanChoi}</p>
    </div>
  );
};

export default KetQua;
