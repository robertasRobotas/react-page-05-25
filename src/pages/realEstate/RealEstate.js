import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";

const RealEstatePage = () => {
  const [text, setText] = useState("Labas mama, vis dar programuoju");
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("labas");
  }, [text]);

  return (
    <>
      <Navbar />
      <button
        onClick={() => {
          setNumber((prevState) => prevState + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          setNumber((prevState) => prevState - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setText("Wazeeeee");
        }}
      >
        Change text
      </button>
      <br />
      {text}
      <br />
      <h1>{number}</h1>

      <Footer />
    </>
  );
};

export default RealEstatePage;
