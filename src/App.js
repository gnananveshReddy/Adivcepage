import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const d = await res.json();
    setAdvice(d.slip.advice);
    setCount(count + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <p>you have clicked advice {count} many times</p>
    </div>
  );
}
