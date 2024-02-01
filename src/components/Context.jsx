import { StateContext } from "Context/StateContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Context() {
  const stateContext = useContext(StateContext);

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

  const filteredArr = stateContext.arr.filter(
    (prev) => prev.player === stateContext.colorPlayer
  );

  return (
    <MainDiv>
      {filteredArr.length !== 0 ? (
        filteredArr.map((prev) => (
          <ContextDiv key={prev.id} to={`/sub/${prev.id}`}>
            <SectionStyle>
              <ImgDiv>
                <ImgStyle
                  src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/313270083_10161319226523836_2119858939192991777_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=NQ0q73ntRs8AX8YScHP&_nc_ht=scontent-ssn1-1.xx&oh=00_AfB9bapLro4_ZY_FuxVn8aCA3V06iort2BPUm5my2gyP6g&oe=65BE4707"
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
        <NoneMain>{playerChange(stateContext.colorPlayer)}</NoneMain>
      )}
    </MainDiv>
  );
}

export default Context;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
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
  color: white;
  width: 500px;
  height: 50px;
  border-radius: 5px;
  text-align: center;
  padding-top: 20px;
`;
