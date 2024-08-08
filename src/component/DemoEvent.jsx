import React from 'react'

const DemoEvent = () => {
    function chaoMungSinhVienMoi(hoTen){
        alert(`chào mừng sinh viên ${hoTen}`);
    }
  return (
    <div className="container">
        <h2 className="text-2xl font-bold">Demo về xử lý sự kiện trong React</h2>
        <button onClick={()=>{
            chaoMungSinhVienMoi("Hưng")
        }}  className="bg-black text-white py-2 px-5 rounded-md">Hiển Thị câu chào</button>
        <label htmlFor="" className="block">
            Họ Tên
        </label>
        <input type="text"
        placeholder="Vui lòng nhập họ tên"
        className="p-2 border rounded-md block mb-10"
        onChange={(event) => {
            console.log(event.target.value);
        }} />
    </div>
  )
}

export default DemoEvent