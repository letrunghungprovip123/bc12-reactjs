import { createSlice } from '@reduxjs/toolkit'
import { getRandomNumber } from '../../util/util';

const initialState = {
    xiNgauS : {
        xiNgau1 : 2,
        xiNgau2 : 3,
        xiNgau3 : 6,
    },
    tongSoBanThang : 0,
    tongSoBanChoi : 0,
    banChon : "Tài",
}

const xiNgauSlice = createSlice({
  name: "xiNgau",
  initialState,
  reducers: {
    luaChonNguoiDung: (state,action) => {
        console.log(action);
        state.banChon = action.payload;
    },
    cacSoXiNgau : (state,actions) => {
        console.log(actions)
        let xiNgau1 = getRandomNumber();
        let xiNgau2 = getRandomNumber();
        let xiNgau3 = getRandomNumber();
        console.log(xiNgau1)
        console.log(xiNgau2);
        console.log(xiNgau3);
        state.xiNgauS = { xiNgau1,xiNgau2,xiNgau3 }
        state.tongSoBanChoi++;
        let checker = xiNgau1 + xiNgau2 + xiNgau3 > 11 ? true : false;
        console.log(checker)
        console.log(state.banChon)
        checker == state.banChon && state.tongSoBanThang++ 
    }
  }
});

export const {luaChonNguoiDung,cacSoXiNgau} = xiNgauSlice.actions

export default xiNgauSlice.reducer