import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Context() {
  const colorPlayer = useSelector((state) => state.stateRedux.colorPlayer);
  const arr = useSelector((state) => state.stateRedux.arr);

  const overLength = (overContext) => {
    if (overContext) {
      return overContext.length > 20
        ? overContext.substring(0, 20) + "..."
        : overContext;
    }

    return null;
  };

  const playerChange = (item) => {
    switch (item) {
      case "son":
        return "손흥민에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되주세요!";

      case "kim":
        return "김민재에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되주세요!";

      case "lee":
        return "이강인에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되주세요!";

      case "hwang":
        return "황희찬에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되주세요!";
      default:
        return "남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되주세요!";
    }
  };

  const filteredArr = arr.filter((prev) => prev.player === colorPlayer);

  return (
    <MainDiv>
      {filteredArr.length !== 0 ? (
        filteredArr.map((prev) => (
          <ContextDiv key={prev.id} to={`/sub/${prev.id}`}>
            <SectionStyle>
              <ImgDiv>
                <ImgStyle
                  src="data:image/jpeg;base64,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"
                  alt="유저 프로필 이미지"
                />
              </ImgDiv>
              <NameTiemDiv>
                <span>{prev.name}</span>
                <TimeStyle>{prev.time}</TimeStyle>
              </NameTiemDiv>
            </SectionStyle>
            <ContextStyle>{overLength(prev.context)}</ContextStyle>
          </ContextDiv>
        ))
      ) : (
        <NoneMain>{playerChange(colorPlayer)}</NoneMain>
      )}
    </MainDiv>
  );
}

export default Context;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;

  width: 500px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const ContextDiv = styled(Link)`
  border: 1px solid white;
  width: 440px;
  margin: 20px 0 20px 0;
  border-radius: 5px;
  padding: 20px;
  &:hover {
    transition: all 0.2s linear;
    transform: scale(1.05);
  }
  text-decoration: none; /* 링크에 밑줄 제거 */
  color: inherit; /* 링크 색상을 부모 요소와 동일하게 설정 */
`;

export const SectionStyle = styled.section`
  display: flex;
  flex-direction: row;
`;

export const ImgDiv = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 70%;
  overflow: hidden;
`;

export const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NameTiemDiv = styled.div`
  margin: 20px;
`;

const TimeStyle = styled.div`
  margin-top: 10px;
`;

const ContextStyle = styled.p`
  width: 300px;
  height: 30px;
  padding: 8px 0 0 5px;
  margin-left: 90px;
  background-color: #3b3c3d;
  border-radius: 5px;
`;

const NoneMain = styled.div`
  background-color: black;

  width: 500px;
  height: 50px;
  border-radius: 5px;
  text-align: center;
  padding-top: 20px;
`;
