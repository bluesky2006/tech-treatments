"use client";

import { useEffect, useState } from "react";

const headlines = [
  "Working from home and want your setup sorted?",
  "Updated your Mac/PC and now everything feels different?",
  "Laptop running slow, noisy or constantly 'thinking'?",
  "Need a new computer but not sure what to buy?",
  "Not sure what to do with that old computer lying around?",
];

export default function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setVisible(true);
      }, 500); // must match transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`mt-6 text-4xl font-semibold sm:text-5xl text-zinc-100 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {headlines[index]}
    </h1>
  );
}
