import React, { useState } from 'react';

const ScientificCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Add value to input
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear display
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Remove last character
  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Calculate result
  const handleCalculate = () => {
    try {
      if (input.trim() === '') return;

      let expression = input
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/π/g, 'Math.PI')
        .replace(/√/g, 'Math.sqrt')
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/log/g, 'Math.log10')
        .replace(/ln/g, 'Math.log')
        .replace(/\^/g, '**');

      const calculatedResult = eval(expression);

      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">

        {/* Display */}
        <div className="display">
          <div className="expression">{input || '0'}</div>
          <div className="result">{result}</div>
        </div>

        {/* Buttons */}
        <div className="buttons">

          {/* Scientific Buttons */}
          <button onClick={() => handleClick('sin(')} className="btn sci">sin</button>
          <button onClick={() => handleClick('cos(')} className="btn sci">cos</button>
          <button onClick={() => handleClick('tan(')} className="btn sci">tan</button>
          <button onClick={() => handleClick('log(')} className="btn sci">log</button>

          <button onClick={() => handleClick('ln(')} className="btn sci">ln</button>
          <button onClick={() => handleClick('√(')} className="btn sci">√</button>
          <button onClick={() => handleClick('^')} className="btn sci">x²</button>
          <button onClick={() => handleClick('π')} className="btn sci">π</button>

          {/* Control Buttons */}
          <button onClick={handleClear} className="btn clear">C</button>
          <button onClick={handleBackspace} className="btn backspace">⌫</button>
          <button onClick={() => handleClick('÷')} className="btn operator">÷</button>
          <button onClick={() => handleClick('×')} className="btn operator">×</button>

          {/* Numbers */}
          <button onClick={() => handleClick('7')} className="btn">7</button>
          <button onClick={() => handleClick('8')} className="btn">8</button>
          <button onClick={() => handleClick('9')} className="btn">9</button>
          <button onClick={() => handleClick('-')} className="btn operator">-</button>

          <button onClick={() => handleClick('4')} className="btn">4</button>
          <button onClick={() => handleClick('5')} className="btn">5</button>
          <button onClick={() => handleClick('6')} className="btn">6</button>
          <button onClick={() => handleClick('+')} className="btn operator">+</button>

          <button onClick={() => handleClick('1')} className="btn">1</button>
          <button onClick={() => handleClick('2')} className="btn">2</button>
          <button onClick={() => handleClick('3')} className="btn">3</button>
          <button onClick={handleCalculate} className="btn equal-to">=</button>

          <button onClick={() => handleClick('0')} className="btn zero">0</button>
          <button onClick={() => handleClick('.')} className="btn">.</button>
          <button onClick={() => handleClick('(')} className="btn">(</button>
          <button onClick={() => handleClick(')')} className="btn">)</button>

        </div>
      </div>
    </div>
  );
};

export default ScientificCalculator;