import React from 'react';
// import "./demoCss.css";
import style from "./demoCss.module.css";
const DemoCss = () => {
  return (
    <div className="demo_css">
        <h2 className={style.h2}>Demo về dử dụng css trong dự án</h2>
        <p className={style.sub_title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam blanditiis quae officiis magni corporis rerum soluta dicta a amet est.</p>
    </div>
  )
}

export default DemoCss