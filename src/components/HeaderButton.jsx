import React from "react";
import styled from "styled-components";

function HeaderButton({
  btnColor,
  setBtnColor,
  clickMainColor,
  setClickMainColor,
  setColorPlayer,
  player,
  children,
}) {
  const onClickPlayer = (name) => {
    clickbtnColor(name);
    setColorPlayer(name);
    setClickMainColor(name);
  };

  const clickbtnColor = (player) => {
    const updatedColors = {
      son: "black",
      kim: "black",
      lee: "black",
      hwang: "black",
    };
    updatedColors[player] = "yellow";
    setBtnColor(updatedColors);
  };

  return (
    <HeaderBtn
      backgroundColor={btnColor[player]}
      mainColor={clickMainColor === player}
      onClick={() => onClickPlayer(player)}
    >
      {children}
    </HeaderBtn>
  );
}

export default HeaderButton;

const HeaderBtn = styled.button`
  border: 1px solid black;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => (props.mainColor ? "black" : "white")};
  width: 100px;
  height: 40px;
  margin: 10px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: yellow;
    color: black;
  }
`;
