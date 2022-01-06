import React, { useState } from "react";
import "./styles.css";
//親コンポーネントから現在のカウント数ountをpropsとして受け取る
const CounterText = (props) => <p>現在のカウント数 : {props.count}</p>;

const INITIAL_COUNT = 0;

const Counter = () => {
  //countは現在の値
  //setCountは現在の値を更新するための関数
  const [count, setCount] = useState(INITIAL_COUNT);

  const countAdd = () => setCount((prevCount) => prevCount + 1);

  const countSub = () => setCount((prevCount) => prevCount - 1);

  const countReset = () => setCount(INITIAL_COUNT);

  return (
    <>
      <CounterText count={count} />

      <button onClick={countAdd}>ボタン +1</button>

      <button onClick={countSub}>ボタン -1</button>

      <button onClick={countReset}>リセット</button>

      <p>カウント : {count}</p>
    </>
  );
};

export default function App() {
  return <Counter />;
}
