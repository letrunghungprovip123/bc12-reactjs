import React, { useState } from "react";
import hinhXeDen from '../../assets/products/black-car.jpg';
const DemoState = () => {
    // luôn khai báo hook ở đầu component
    // hooks không được khai báo
    // hooks useState
    
    const [state, setState] = useState(8);
    const [hoTen, setHoTen] = useState("");
  let diemToan = 9;
  return (
    <div>
      <h2>Demo về state trong React</h2>
      <p>{diemToan}</p>
      <p>Giá trị state: {state}</p>
      <button
        // onClick = {() => {
        //     diemToan++;
        //     console.log(diemToan);
        // }}
        onClick ={() => {
            setState(state + 1);
        }}
       className="py-2 px-5 bg-red-500 rounded-lg text-white">   
        Tăng điểm
      </button>
      <div>
        <label htmlFor="">Nhập tên</label>
        <input 
        onChange = {(event) => {
            setHoTen(event.target.value)
        }}
        type="text"  className="p-2 border" placeholder="Nhập tên"/>
        <p>Họ tên: {hoTen}</p>
      </div>
      <img src="./public/CarBasic/products/black-car.jpg" alt="" />
      <img src={hinhXeDen} alt="" />
    </div>
  );
};

export default DemoState;
