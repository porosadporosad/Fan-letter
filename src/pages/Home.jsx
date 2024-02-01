import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Read from "../components/Read";

function Home() {
  const firstDate = [
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
      name: "음바페아님",
      context: "강인아 보고싶구나",
      player: "lee",
      time: "2024. 1. 30. 오후 4:42:11",
      id: "4",
    },
    {
      name: "여진구",
      context: "잘생겨서 배우해도 될듯",
      player: "hwang",
      time: "2024. 1. 30. 오후 10:51:24",
      id: "5",
    },
  ];

  useEffect(() => {
    const getLocal = localStorage.getItem("arr");
    const json = JSON.parse(getLocal);

    if (json) {
      setArr(json);
    } else {
      localStorage.setItem("arr", JSON.stringify(firstDate));
      setArr(firstDate);
    }
  }, []);

  const [arr, setArr] = useState(firstDate);
  const [colorPlayer, setColorPlayer] = useState("son");

  return (
    <div>
      <Header colorPlayer={colorPlayer} setColorPlayer={setColorPlayer} />
      <Read arr={arr} setArr={setArr} colorPlayer={colorPlayer} />
    </div>
  );
}

export default Home;
