import React, { useEffect } from "react";
import Header from "../components/Header";
import Read from "../components/Read";
import { array, firstDate } from "../redux/modules/stateRedux";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getLocal = localStorage.getItem("arr");
    const json = JSON.parse(getLocal);

    if (json) {
      dispatch(array(json));
    } else {
      localStorage.setItem("arr", JSON.stringify(firstDate));
      dispatch(array(firstDate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Read />
    </>
  );
}

export default Home;
