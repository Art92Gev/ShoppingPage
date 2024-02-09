import React, { useRef, useState } from 'react';
import './Slider.css';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Slider() {
  let detalref = useRef();
  const [ofsetX, setOfsetX] = useState(0);
  let currentNumber = 100;

  return (
    <div className="slider">
      <div className="buttons">
        <button onClick={() => {
          if (ofsetX === 0) {
            setOfsetX(600);
          }
          else {
            setOfsetX(ofsetX - currentNumber);
          }
          setTimeout(()=>{  detalref.current.style.filter = 'brightness(.95) contrast(1.3) blur(170px)'; });
          setTimeout(()=>{  detalref.current.style.filter = 'brightness(.95) contrast(1.3) blur(0px)'; },500);
        }}>
          <BiChevronLeft />
        </button>
        <button onClick={() => {
          if (ofsetX < 600) {
            setOfsetX(ofsetX + currentNumber)
          }
          else {
            setOfsetX(0);
          }
          setTimeout(()=>{  detalref.current.style.filter = 'brightness(.95) contrast(1.3) blur(170px)'; });
          setTimeout(()=>{  detalref.current.style.filter = 'brightness(.95) contrast(1.3) blur(0px)'; },500);
        }}>
          <BiChevronRight />
        </button>
      </div>
      <menu ref={detalref} style={{left : -ofsetX + '%'}}>
      <div className="pictures p1"></div>
      <div className="pictures p2"></div>
      <div className="pictures p3"></div>
      <div className="pictures p4"></div>
      <div className="pictures p5"></div>
      <div className="pictures p6"></div>
      <div className="pictures p7"></div>
      </menu>
    </div>
  )
}