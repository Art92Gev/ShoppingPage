import React, { useRef, useState } from 'react';
import './Paymant.css';
import { Context } from './Context';
import { useContext } from 'react';
import { AutoTabProvider } from 'react-auto-tab';

// Avtomat detalnneri tab hamakargy maxLengt verjacneluc pas talll;
// npm install react-auto-tab;
// Ashxatume maxLength={7} placeholder='Name Surname' tabbable="false" => Hatkutyunow erb chenq tramadrum chi gorcum;

export default function Paymant() {
  const elem = useContext(Context);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  const valueText = useRef();

  const [valid, setValid] = useState({
    name: '',
    number: '',
    data: '',
    cvv: '',
    reg: '',
    code: '',
    num1: '',
    num2: '',
    num3: '',
  })

  // inputi nersum grel function;
  // [A-Z][a-z]    => 1in tar M, 2rd tray p;
  // $             => Simwoly Pahpani grwacqy;
  // Teq sleshnery => /Katarel Regexp/;
  // d{3}          => Erb Paymany veraberume tverin;
  // ^             => Skizb;
  // /+/          => Erb cankanumenq Sharunakakan Bnuyt unena mek ayl kochaki het kapwac;
  //  +            => Sharunakakan Bnuyt;

  // Paymannery kapeluc if(){} => match() => ardyoq parunakume;

  // logica;
  const validName = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  const validNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  const validDate = /^\d{2}\/\d{2}$/;
  const validCvv = /^\d{3}$/;
  let validRegion = /\+\d{3}$/;
  let validNums = /^\d{2}$/;


  // Naxntrac Inoutum greluc Avtomat objecti keyerin veragrum;
  const handleChange = (e, filed) => {
    setValid({ ...valid, [filed]: e.target.value });
    if (valid.number.length === 4 || valid.number.length === 9 || valid.number.length === 14) {
      if (e.key === 'Backspace') {
        e.preventDefault()
        setValid({ ...valid, number: valid.number.slice(0, valid.number.length - 1) })
      }
      else {
        setValid({ ...valid, number: valid.number.concat('-') })
      }
    }
  }

  const handleClick = () => {
    if (!valid.name.match(validName)) {
      ref2.current.style.opacity = '1';
    }
    if (
      !valid.reg.match(validRegion) && !valid.code.match(validNums) && !valid.num1.match(validNums) && !valid.num2.match(validNums) && !valid.num3.match(validNums)) {
      ref1.current.style.opacity = '1';
    }
    if (!valid.number.match(validNumber)) {
      ref3.current.style.opacity = '1';
    }
    if (!valid.data.match(validDate)) {
      ref4.current.style.opacity = '1';
    }
    if (!valid.cvv.match(validCvv)) {
      ref5.current.style.opacity = '1';
    }
    else {
      ref1.current.style.opacity = 0;
      ref2.current.style.opacity = 0;
      ref3.current.style.opacity = 0;
      ref4.current.style.opacity = 0;
      ref5.current.style.opacity = 0;
      valueText.current.innerText = 'Your Paymant are Accpet'
      valueText.current.style.color = 'green';
      valueText.current.style.transform = 'scale(1.4)';
      valueText.current.style.letterSpacing = '3px';
    }
  }

  return (
    <AutoTabProvider className='form'>
      <div className="validBox">
        <div className="clear" onClick={() => {
          elem.setShowPay(!elem.showPay)
        }}>X</div>
        <div className="forCard"></div>
        <div className="blockUp">
          <section>
            <input type="text" className='info' value={valid.name} onChange={(e) => handleChange(e, 'name')} placeholder='Name Surname' tabbable="false" />
            <div ref={ref1} className="x">X</div>
          </section>
          <section>
            <input type="text" className='info' maxLength={19} value={valid.number} onKeyDown={handleChange} onChange={(e) => handleChange(e, 'number')} placeholder='XXXX-XXXX-XXXX-XXXX' tabbable="false" />
            <div ref={ref2} className="x">X</div>
          </section>
          <section>
            <input type="text" className='info' maxLength={5} onChange={(e) => handleChange(e, 'data')} placeholder='02/03' tabbable="false" />
            <div ref={ref3} className="x">X</div>
          </section>
          <section>
            <input type="text" className='info' maxLength={3} onChange={(e) => handleChange(e, 'cvv')} placeholder='XXX' tabbable="false" />
            <div ref={ref4} className="x">X</div>
          </section>
        </div>
        <div className="blockCenter">
          <div ref={ref5} className="x">X</div>
          <input type="text" className='tell' maxLength={4} onChange={(e) => handleChange(e, 'reg')} placeholder='+374' tabbable="false" />
          <input type="text" className='tell' maxLength={2} onChange={(e) => handleChange(e, 'code')} placeholder='XX' tabbable="false" />
          <input type="text" className='tell' maxLength={2} onChange={(e) => handleChange(e, 'num1')} placeholder='XX' tabbable="false" />
          <input type="text" className='tell' maxLength={2} onChange={(e) => handleChange(e, 'num2')} placeholder='XX' tabbable="false" />
          <input type="text" className='tell' maxLength={2} onChange={(e) => handleChange(e, 'num3')} placeholder='XX' tabbable="false" />
        </div>
        <button onClick={handleClick}>Accept</button>
        <p ref={valueText}></p>
      </div>
    </AutoTabProvider>
  )
}


