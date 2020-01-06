import React from "react";
import Example from "./Example";

export default ({
  concept,
  examples,
  initialSelection,
  showFeedback,
  setReady,
  selected,
  setSelected
}) => {
  const toggleSelect = i => x => {
    if (selected[i] === x) selected[i] = 0;
    else selected[i] = x;
    setReady(!selected.some((x, j) => x === 0 && !initialSelection[j]));
    setSelected([...selected]);
  };

  return (
    <>
      <div className="Examples">
        {examples.map((ex, i) => (
          <Example
            key={i}
            {...ex}
            concept={concept}
            showFeedback={showFeedback}
            selected={selected[i]}
            initial={initialSelection[i]}
            select={toggleSelect(i)}
          />
        ))}
      </div>
    </>
  );
};
