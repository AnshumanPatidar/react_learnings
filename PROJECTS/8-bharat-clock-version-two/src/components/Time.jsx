import { useEffect } from "react";
import { useState } from "react";

function CurrTime() {
  const [Time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId); // to clear the interval "clearInteral" is used
      console.log("cancelled the interval");
    };
  }, []);

  return (
    <h5>
      This is the current time: {Time.toLocaleDateString()} -{" "}
      {Time.toLocaleTimeString()}
    </h5>
  );
}

export default CurrTime;
