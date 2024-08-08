import axios from "axios";
import React, { useCallback, useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NotificationContext } from "../../App";

const DemoUseEffect = () => {
  const data = useContext(NotificationContext);
  console.log(data);
  const [listShoe, setListShoe] = useState();
  useEffect(() => {
    console.log("Tôi là useEffect chạy sau khi giao diện xuất hiện");
    axios({
      method: "GET",
      url: "https://shop.cyberlearn.vn/api/Product",
    })
      .then((res) => {
        console.log(res);
        setListShoe(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
    data.handleNotification("error", "Hello");
  }, []);
  console.log("Tôi là componenet demoUseEffect");
  console.log(listShoe);
  function render() {
    console.log("Tôi là giao diện của demouseEffect");
    return <p>{listShoe && listShoe[0]?.name}</p>;
  }
  const [number, setNumber] = useState("");
  const functionCallBack = useCallback(render, [number]);
  return (
    <div>
      {functionCallBack()}
      <input
        type="text"
        placeholder="Vui lòng nhập bất kì số"
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <div className="grid grid-cols-4 gap-5">
        {listShoe?.map((item, index) => {
          return (
            <div>
              <img src={item.image} alt="" />
              <h2>{item.name}</h2>
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
    </div>
  );
};

export default DemoUseEffect;
