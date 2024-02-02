# Chapter 3-2 주특기 숙련 (React)

## 주제: “그룹 아티스트 팬레터함”을 만들어 봅시다.

### 홈화면
 ![이미지 이름](https://github.com/porosadporosad/Fan-letter/blob/redux/main.png)

### 상세화면
![이미지 이름](https://github.com/porosadporosad/Fan-letter/blob/redux/subimg.png)
 * * *
 ### branch : redux
 shared -> Router.js
 
 pages -> Home.jsx(홈화면), Sub.jsx(상세화면)

 components -> Header.jsx(제목, 버튼) , HeaderButton.jsx(버튼상세), Read.jsx(작성부분) ,Context.jsx(리스트)

 redux -> config(configStore.js), modules(stateRedux.js, colorChange.js)

 #### props 
 configStore.js(stateRedux, colorChange,)

stateRedux -> (arr, array) , (colorPlayer, color_player)

colorChange -> (btnColor, btn_Color), (clickMainColor, click_Main_Color)
 
Home.jsx(**useDispatch : array**) -> Header.jsx , Read.jsx

Header.jsx -> HeaderButton.jsx(**{useDispatch : color_player, btn_Color, click_Main_Color}, {useSelector : btnColor, clickMainColor}**)

Read.jsx(**{useDispatch : array}, {useSelector : arr}**) -> Context.jsx(**useSelector : arr, colorPlayer**)

