import React, { useState } from "react";

const CounterFunc = () => {
  const [count, setCount] = useState({ value: 0, color: "blue" });

  const increment = () => {
    setCount((prevCount) => {
      return { ...prevCount, value: prevCount.value + 1 };
    });
  };

  // useEffect(() => {
  //   console.log("useEffect in Action");
  //   return console.log("unmounting func comp.");
  // }, []);

  return (
    <div onClick={increment} className="badge badge-success badge-pill p-2">
      {count.value} {count.color}
    </div>
  );
};

export default CounterFunc;
