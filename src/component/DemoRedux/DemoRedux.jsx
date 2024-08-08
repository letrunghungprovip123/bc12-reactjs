import React from 'react'
import { useDispatch } from 'react-redux';
import { capNhatHoTen } from '../../Redux/slices/userSlice';

const DemoRedux = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Demo về xử lý chức năng với redux toolkit</h2>
      <label htmlFor="">Tên người dùng</label>
      <input type="text"
      onChange = {(event) => {
        console.log(event.target.value)
        dispatch(capNhatHoTen(event.target.value))
      }}
      className='border p-2 rounded-md'
      placeholder='Vui lòng nhập tên người dùng' />
    </div>
  );
}

export default DemoRedux