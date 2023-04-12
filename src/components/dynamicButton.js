import { useState } from "react";
import useInterval from "../custom_hooks/useInterval";
import AdaptiveLink from "./adaptiveLink";

const DynamicButton = ({ to, textArray, className }) => {
  const [textIndex, setTextIndex] = useState(0);
  
  const CycleText = () => {
    useInterval(() => {
      let index = textIndex;
      index = ++index % textArray.length;
      setTextIndex(index);
    }, 1150);

    return textArray[textIndex];
  };

  return (
    <AdaptiveLink {...{to, className}} role="button">
        {CycleText()}
    </AdaptiveLink>
  );
};

export default DynamicButton;