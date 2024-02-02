# Chapter 3-2 주특기 숙련 (React)

## 주제: “그룹 아티스트 팬레터함”을 만들어 봅시다.

### 홈화면
 ![이미지 이름](https://github.com/porosadporosad/Fan-letter/blob/context/main.png)

### 상세화면
![이미지 이름](https://github.com/porosadporosad/Fan-letter/blob/context/subimg.png)
 * * *
 ### branch : context
 shared -> Router.js
 
 pages -> Home.jsx(홈화면), Sub.jsx(상세화면)

 components -> Header.jsx(제목, 버튼) , HeaderButton.jsx(버튼상세), Read.jsx(작성부분) ,Context.jsx(리스트)

 Context -> StateContext.js(createContext)

 #### props 
Home.jsx(**StateContext.Provider : arr,
        setArr,
        colorPlayer,
        setColorPlayer**) -> Header.jsx , Read.jsx

Header.jsx -> HeaderButton.jsx(**useContext : setColorPlayer**)

Read.jsx(**useContext : arr, setArr**) -> Context.jsx(**useContext : arr, colorPlayer**)
