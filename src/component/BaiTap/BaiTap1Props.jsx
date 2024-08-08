import React, { useState } from "react";
import ItemPokemon from "./ItemPokemon";
import { DatePicker } from "antd";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";
const BaiTap1Props = () => {
  const taiKhoan = useInput("abc");
  console.log(taiKhoan)
  const { pokemons } = useSelector((state) => state.pokemonSlice);
  return (
    <div>
      <h2>Bài tập hiển thị các pokemons</h2>
      <div className="grid grid-cols-5">
        {pokemons.map((item, index) => {
          let { image, name, attack, defense } = item;
          return <ItemPokemon pokemon={item} />;
        })}
      </div>

      <input type="text" placeholder="vui lòng nhập tài khoản"
      {...taiKhoan}
      />
    </div>
  );
};

export default BaiTap1Props;
