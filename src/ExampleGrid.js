import React from "react";
import Example from "./Example";

export default ({
  concept,
  examples,
  initialSelection,
  showFeedback,
  setReady,
  selected,
  setSelected,
  gameType,
  setInitialSelection
}) => {
  const toggleSelect = i => x => {
    if (selected[i] === x) selected[i] = 0;
    else selected[i] = x;
    setReady(!selected.some((x, j) => x === 0 && !initialSelection[j]));
    setSelected([...selected]);
  };

  const toggleInitial = i => () => {
    initialSelection[i] = !initialSelection[i];
    const count = initialSelection.reduce((acc, val) => acc + (val ? 1 : 0), 0);
    setReady(count > 2 && count < 7);
    setInitialSelection([...initialSelection]);
  };

  return (
    <div className="Examples">
      {examples.map((ex, i) => (
        <Example
          key={i}
          {...ex}
          gameType={gameType}
          concept={concept}
          showFeedback={showFeedback}
          selected={selected[i]}
          initial={initialSelection[i]}
          select={gameType === "student" ? toggleSelect(i) : toggleInitial(i)}
        />
      ))}
    </div>
  );
};
