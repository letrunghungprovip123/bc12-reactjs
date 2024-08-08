import React from "react";
import "./style.scss";
import XiNgau from "./XiNgau";
import KetQua from "./KetQua";
import { useDispatch, useSelector } from "react-redux";
import { cacSoXiNgau } from "../../../Redux/slices/xiNgauSlice";
const BaiTapLacXiNgau = () => {
    const dispatch = useDispatch();
  return (
    <div className="baiTap2">
      <h2 className="uppercase text-5xl">Game Đổ Xí Ngầu</h2>
      <XiNgau/>
      <KetQua />
      <button 
        onClick={() => {
            dispatch(cacSoXiNgau())
        }}
      className="btn-apply">Play game</button>
    </div>
  );
};

export default BaiTapLacXiNgau;
