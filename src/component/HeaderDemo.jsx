import React from "react";

const HeaderDemo = () => {
  const sinhVien = {
    hoTen: "Nguyễn Văn A",
    lop: "FES2",
    tuoi: 18,
  };
  const arrMonAn = [
    {
      tenMon: "Mì Xào Hải Sản",
      giaTien: 25000,
    },
    {
      tenMon: "Súp Cua",
      giaTien: 15000,
    },
    {
      tenMon: "Lẩu manwah",
      giaTien: 35000,
    },
  ];
  const classButton = "py-2 px-5 bg-purple-500 text-white round-xl";
  return (
    <div className="bg-black text-white p-10">
      <p>tôi là {sinhVien.hoTen}</p>
      <button className={classButton} id={sinhVien.lop}>đăng nhập</button>
      <p>
        {sinhVien.tuoi > 18
          ? "Xin chúc mừng bạn đã đủ tuổi"
          : "xin lỗi bạn chưa đủ tuổi"}
      </p>
        {arrMonAn.map((item,index) => {
            return <div>
                <h3>{item.tenMon}</h3>
                <p>{item.giaTien}</p>
            </div>
        })}
    </div>
  );
};

export default HeaderDemo;
