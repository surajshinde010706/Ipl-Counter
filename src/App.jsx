import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(20000000);
  const [value, setValue] = useState("");
  const [highest, setHighest] = useState(0);

  const formatValue = (val) => {
    if (val < 200_00_000) {
      return `${val / 1_00_000} L`;
    }
    return `${(val / 1_00_00_000).toFixed(2)} Cr`;
  };

  const handleIncrease = () => {
    const inc = Number(value) * 1_00_000;
    if (!isNaN(inc)) {
      setAmount(prev => {
        const updated = prev + inc;
        if (updated > highest) setHighest(updated);
        return updated;
      });
    }
  };

  const handleDecrease = () => {
    const dec = Number(value) * 1_00_000;
    if (!isNaN(dec)) {
      setAmount(prev => Math.max(prev - dec, 0));
    }
  };

  const handleReset = () => setAmount(0);

  // NEW BUTTON HANDLERS
  const increaseBy20L = () => {
    setAmount(prev => {
      const updated = prev + 20_00_000;
      if (updated > highest) setHighest(updated);
      return updated;
    });
  };

  const setTo2Cr = () => {
    const updated = 2_00_00_000;
    setAmount(updated);
    if (updated > highest) setHighest(updated);
  };

  const setTo1Cr = () => {
    const updated = 1_00_00_000;
    setAmount(updated);
    if (updated > highest) setHighest(updated);
  };

  const setTo20L = () => {
    const updated = 20_00_000;
    setAmount(updated);
    if (updated > highest) setHighest(updated);
  };

  const showFlame = amount >= highest && highest > 0;

  return (
    <div className="main-wrapper">
      <div className="counter-box">
        {showFlame && <div className="flame"></div>}
        <h1 className="counter-value">{formatValue(amount)}</h1>
      </div>

      <div className="bottom-controls">
        <input
          type="number"
          placeholder="Enter Lakhs"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="buttons">
          <button className="btn btn-inc" onClick={handleIncrease}>Increase</button>
          <button className="btn btn-dec" onClick={handleDecrease}>Decrease</button>
          <button className="btn btn-reset" onClick={handleReset}>Reset</button>
        </div>

        {/* NEW BUTTONS */}
        <div className="buttons">
          <button className="btn btn-inc" onClick={increaseBy20L}>Increase by 20L</button>
          <button className="btn btn-inc" onClick={setTo2Cr}>Set Amount to 2 Cr</button>
          <button className="btn btn-inc" onClick={setTo1Cr}>Set Amount to 1 Cr</button>
          <button className="btn btn-inc" onClick={setTo20L}>Set Amount to 20L</button>
        </div>

        <h2 className="highest-text">Highest Count: {formatValue(highest)}</h2>
      </div>
    </div>
  );
}

export default App;
