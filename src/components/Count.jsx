import { useEffect, useState } from "react";

function Count({ num, duration }) {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    const intervalTime = duration / num;
    const interval = setInterval(() => {
      setNumber((prev) => {
        if (prev >= num) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval); // Clean up
  }, [num, duration]);
  return <span>{number}</span>;
}

export default Count;
