import React from 'react'

const DanhSachDienThoai = ({ listPhone,title,updateDanhSachDienThoai }) => {
    return (
      <>
        <h3>{title}</h3>
        <div className="grid grid-cols-4">
          {listPhone.map((item, index) => {
            let {
              image,
              name,
            } = item;
            return (
              <div>
                <img src={image} alt="" />
                <h3>Name:{name}</h3>
                <button 
                onClick = {() => {
                    updateDanhSachDienThoai(item)
                }}
                className="bg-green-700 text-white py-2 px-5 rounded-lg">Chi tiết</button>
              </div>
            );
          })}
        </div>
      </>
    );
}

export default DanhSachDienThoai