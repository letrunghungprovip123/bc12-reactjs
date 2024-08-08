import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { luaChonNguoiDung } from '../../../Redux/slices/xiNgauSlice';
const XiNgau = () => {
    const dispatch = useDispatch()
    const { xiNgauS } = useSelector((state) => state.xiNgauSlice);
  return (
    <div className="xiNgau flex justify-between">
      <button
        onClick={() => {
          dispatch(luaChonNguoiDung(true));
        }}
        className="btn-xiNgau"
      >
        Tài
      </button>
      <div className="flex items-center p-3 h-max">
        <img
          src={`./public/LacXinNgau/${xiNgauS.xiNgau1}.png`}
          width={50}
          alt=""
        />
        <img
          src={`./public/LacXinNgau/${xiNgauS.xiNgau2}.png`}
          width={50}
          alt=""
        />
        <img
          src={`./public/LacXinNgau/${xiNgauS.xiNgau3}.png`}
          width={50}
          alt=""
        />
      </div>
      <button
        onClick={() => {
          dispatch(luaChonNguoiDung(false));
        }}
        className="btn-xiNgau"
      >
        Xỉu
      </button>
    </div>
  );
}

export default XiNgau