import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main.js";
import Footer from "./components/Footer";
import fakeData from "./sahte-veri";
import axios from "axios";
import Pick from "./components/Pick";
import sahteArray from "./components/Sahte-veri";

function App() {
  const dateNow = new Date();

  const [data, setData] = useState(fakeData);
  const [date, setDate] = useState(dateNow.toISOString().slice(0, 10));
  const [isRandom, setIsRandom] = useState(false);

  useEffect(() => {
    setData(null);
    const dataUrl = isRandom
      ? `https://api.nasa.gov/planetary/apod?api_key=AOrjOCj81fYxcoA76fqynX0vrTSVBLf6Qt8U8gsO&count=3`
      : `https://api.nasa.gov/planetary/apod?api_key=AOrjOCj81fYxcoA76fqynX0vrTSVBLf6Qt8U8gsO&date=${date}`;
    axios
      .get(dataUrl)
      .then((res) => setData(res.data))
      .catch((res) => setData(isRandom ? sahteArray : fakeData));
  }, [date, isRandom]);

  return (
    <div className="App">
      <Header setIsRandom={setIsRandom} date={date} setDate={setDate} />
      {isRandom ? <Pick items={data} /> : <Main data={data} />}
      <Footer />
    </div>
  );
}

export default App;
