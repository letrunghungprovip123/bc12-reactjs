import axios from "axios";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const DemoUseEffectDetail = () => {
  const [shoe, setShoe] = useState({});
  const [searchParam, setSearchParam] = useSearchParams();
  const dataGiaTien = searchParam.get("giatien");
  console.log(dataGiaTien);
  // shoe.tuoi ==> undifined
  const { id } = useParams();
  let random = id + Math.floor(Math.random() * 6);
  const randomMemo = useMemo(() => {
    return random;
  }, [id]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    })
      .then((res) => {
        setShoe(res.data.content);
      })
      .catch((err) => {});
  }, [id]);
  useEffect(() => {
    return () => {
      console.log("Component useEffectDetail đã bị tắt");
    };
  }, []);

  console.log(shoe);
  console.log(random);
  const refCustom = useRef(null);
  const refInput = useRef(null);
  return (
    <>
    <input type="text" placeholder="Nhập năm sinh" ref={refInput}
    onChange={(event)=>{
        console.log(event.target.value)
        console.log(refInput.current.value)
    }}/>
    <p>{refInput.current?.value}</p>
    <button
    onClick={() => {
        console.log(refCustom.current.scrollIntoView({
            behavior: "smooth",
            block : "center"
        }))
    }}
    className="py-2 px-5 bg-black text-white rounded-md">Bấm vào để xem các sản phẩm liên quan</button>
      {randomMemo}
      {/* {random} */}
      <input
        type="text"
        className="p-2 border border-black rounded-md"
        placeholder="Vui lòng nhập hãng yêu thích"
        onChange={(event) => {
          const dataQuery = Object.fromEntries(searchParam);
          console.log(dataQuery);
          setSearchParam({
            ...dataQuery,
            hang: event.target.value,
          });
        }}
      />
      <div>
        <h2>Demo về trang chi tiết sản phẩm</h2>
        <div className="flex">
          <div className="w-4/12">
            <img src={shoe.image} alt="" />
          </div>
          <div className="w-8/12">
            <h2 className="font-bold text-3xl">{shoe.name}</h2>
            <p>{shoe.shortDescription}</p>
            <p>Giá tiền: {shoe.price}</p>
            <button className="py-2 px-5 bg-black text-white rounded-md">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
      {/* sản phẩm liên quan  */}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div ref={refCustom}>
        <h3>Các sản phẩm liên quan</h3>
        {shoe.relatedProducts?.map((item, index) => {
          return (
            <div>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>Giá tiền: {item.price}</p>
              <Link
                to={`/demo-use-effect-detail/${item.id}`}
                className="bg-blue-500 text-white py-2 px-5 rounded-md"
              >
                Xem chi tiết
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DemoUseEffectDetail;
