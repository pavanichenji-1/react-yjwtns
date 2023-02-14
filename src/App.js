import React, { useState, useEffect } from 'react';
import './style.css';
import {
  additionOfNumbersMethodicalWay,
  additionOfNumbersLibWay,
} from './addition/addNumbers';
import { minusOfNumbersLibWay } from './substraction/substractNumbers';
export default function App() {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [addedNumberLibWay, setAddedNumberLibWay] = useState('No Value');
  const [addedNumber, setAddedNumber] = useState('No Value');
  const [substractedNumber, setMinusNumber] = useState('No Value');

  const addNumber = () => {
    if (isNaN(Number(string1)) || isNaN(Number(string2))) {
      console.log('in addNumber in if');
      setAddedNumberLibWay(0);
      setAddedNumber(0);
    } else {
      console.log('in else');
      setAddedNumberLibWay(additionOfNumbersLibWay(string1, string2));
      setAddedNumber(additionOfNumbersMethodicalWay(string1, string2));
    }
  };

  const minusNumber = () => {
    if (isNaN(Number(string1)) || isNaN(Number(string2))) {
      console.log('in addNumber in if');

      setMinusNumber(0);
    } else {
      console.log('in else');

      setMinusNumber(minusOfNumbersLibWay(string1, string2));
    }
  };

  useEffect(() => {
    console.log('in useEffect');

    return () => {};
  }, [addedNumber, addedNumberLibWay, substractedNumber]);

  return (
    <div>
      <div className="container">
        <div className="red">
          <div className="floatLeft">
            String 1 &nbsp;
            <input
              value={string1}
              onChange={(e) => setString1(e.target.value)}
              name="string1"
              type="text"
            />
            <br />
            <br />
            String 2 &nbsp;
            <input
              value={string2}
              onChange={(e) => setString2(e.target.value)}
              name="string2"
              type="text"
            />
            <br />
            <br />
            <div className="floatRight">
              <button onClick={addNumber} className="cursorPointer">
                {' '}
                Add Number{' '}
              </button>

              <button onClick={minusNumber} className="cursorPointer">
                {' '}
                Minus Number{' '}
              </button>
            </div>
          </div>
        </div>
        <div className="green">
          <div style={{ display: 'relative !important' }}>
            Addition through function &nbsp; &nbsp; {addedNumber}
            <br />
            <br />
            Addition through Library &nbsp; &nbsp; &nbsp; {addedNumberLibWay}
            <br />
            <br />
            Minus through Library &nbsp; &nbsp; &nbsp; {substractedNumber}
          </div>
        </div>
      </div>
      <p />
    </div>
  );
}
