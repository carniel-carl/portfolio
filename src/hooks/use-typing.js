import React, { useState, useEffect } from "react";

const useTyping = (values) => {
  const [typedValue, setTypedValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phases, setPhases] = useState("TYPING");

  useEffect(() => {
    if (values) {
      switch (phases) {
        case "TYPING": {
          const nextText = values[selectedIndex]?.slice(
            0,
            typedValue.length + 1
          );

          if (nextText === typedValue) {
            setPhases("PAUSE");
            return;
          }

          const timer = setTimeout(() => {
            setTypedValue(nextText);
          }, 200);

          return () => clearTimeout(timer);
        }

        case "DELETING": {
          if (!typedValue) {
            const timer = setTimeout(() => {
              const nextIndex = selectedIndex + 1;
              setSelectedIndex(values[nextIndex] ? nextIndex : 0);
              setPhases("TYPING");
            }, 500);

            return () => clearTimeout(timer);
          }

          const textRemaining = values[selectedIndex]?.slice(
            0,
            typedValue.length - 1
          );

          const timer = setTimeout(() => {
            setTypedValue(textRemaining);
          }, 40);

          return () => clearTimeout(timer);
        }
        case "PAUSE":
        default:
          const timer = setTimeout(() => {
            setPhases("DELETING");
          }, 2000);
          return () => clearTimeout(timer);
      }
    }
  }, [typedValue, values, phases]);

  return { typedValue, phases, text: values[selectedIndex] };
};

export default useTyping;
