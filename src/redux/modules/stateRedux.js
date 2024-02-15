const ARR = "ARR";
const COLOR_PLAYER = "COLOR_PLAYER";

export const array = (payload) => {
  return {
    type: ARR,
    payload,
  };
};

export const color_player = (payload) => {
  return {
    type: COLOR_PLAYER,
    payload,
  };
};

export const firstDate = [
  {
    name: "해리케인",
    context: "아시안컵 먹고 무관탈출 가자",
    player: "son",
    time: "2024. 1. 20. 오후 3:55:57",
    id: "1",
  },
  {
    name: "3대째 토트넘팬",
    context: "부상만 당하지말아다오..",
    player: "son",
    time: "2024. 1. 21. 오후 12:16:33",
    id: "2",
  },
  {
    name: "세리에최고수비수",
    context: "아시아먹고 독일도 먹자",
    player: "kim",
    time: "2024. 1. 27. 오전 9:30:56",
    id: "3",
  },
  {
    name: "여진구",
    context: "잘생겨서 배우해도 될듯",
    player: "hwang",
    time: "2024. 1. 30. 오후 10:51:24",
    id: "4",
  },
  {
    name: "강인맘",
    context: "대강인 결승전 결승골 가자",
    player: "lee",
    time: "2024. 2. 2. 오후 3:11:11",
    id: "5",
  },
];
// 초기 상태값
const initialState = {
  arr: firstDate,
  colorPlayer: "son",
};

// 리듀서
const stateRedux = (state = initialState, action) => {
  switch (action.type) {
    case ARR:
      return {
        ...state,
        arr: action.payload,
      };
    case COLOR_PLAYER:
      return {
        ...state,
        colorPlayer: action.payload,
      };
    default:
      return state;
  }
};

export default stateRedux;
