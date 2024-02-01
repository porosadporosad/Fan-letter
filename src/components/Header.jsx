import React, { useState } from "react";
import styled from "styled-components";
import HeaderButton from "./HeaderButton";

function Header({ setColorPlayer }) {
  const [btnColor, setBtnColor] = useState({
    son: "yellow",
    kim: "black",
    lee: "black",
    hwang: "black",
  });
  const [clickMainColor, setClickMainColor] = useState("son");
  return (
    <HeaderStyle>
      <HeaderH1>축구국가대표팀 팬레터 콜렉션</HeaderH1>
      <HeaderDiv>
        <HeaderButton
          btnColor={btnColor}
          setBtnColor={setBtnColor}
          clickMainColor={clickMainColor}
          setClickMainColor={setClickMainColor}
          setColorPlayer={setColorPlayer}
          player="son"
        >
          손흥민
        </HeaderButton>
        <HeaderButton
          btnColor={btnColor}
          setBtnColor={setBtnColor}
          clickMainColor={clickMainColor}
          setClickMainColor={setClickMainColor}
          setColorPlayer={setColorPlayer}
          player="kim"
        >
          김민재
        </HeaderButton>
        <HeaderButton
          btnColor={btnColor}
          setBtnColor={setBtnColor}
          clickMainColor={clickMainColor}
          setClickMainColor={setClickMainColor}
          setColorPlayer={setColorPlayer}
          player="lee"
        >
          이강인
        </HeaderButton>
        <HeaderButton
          btnColor={btnColor}
          setBtnColor={setBtnColor}
          clickMainColor={clickMainColor}
          setClickMainColor={setClickMainColor}
          setColorPlayer={setColorPlayer}
          player="hwang"
        >
          황희찬
        </HeaderButton>
      </HeaderDiv>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.div`
  background-image: url("https://cdn.iminju.net/news/photo/202312/95537_96617_4853.jpg");
  height: 60vh;
  width: 100vw;
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const HeaderH1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-top: 100px;
`;

const HeaderDiv = styled.div`
  border: 1px solid white;
  width: 500px;
  height: 80px;
  background-color: #3b3c3d;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;
