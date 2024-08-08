import React from "react";

const ChiTietDienThoai = ({ dienThoai }) => {
  return (
    <div className="flex">
      <div className="w-3/12">
        <img src={dienThoai.image} className="h-80" alt="" />
      </div>
      <div className="w-9/12">
        <h3 className="text-xl font-bold">Thông số kỹ thuật</h3>
        <table border={2} cellPadding={10}>
          <tr>
            <td>Màn Hình:</td>
            <td>{dienThoai.screen}</td>
          </tr>
          <tr>
            <td>Hệ điều hành:</td>
            <td>{dienThoai.os}</td>
          </tr>
          <tr>
            <td>Camera trước:</td>
            <td>{dienThoai.front_camera}</td>
          </tr>
          <tr>
            <td>Camera sau:</td>
            <td>{dienThoai.rear_camera}</td>
          </tr>
          <tr>
            <td>Ram:</td>
            <td>{dienThoai.ram}</td>
          </tr>
          <tr>
            <td>Rom:</td>
            <td>{dienThoai.rom}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ChiTietDienThoai;
