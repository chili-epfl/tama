import React, { useState } from "react";
import Example from "./Example";

export default ({ concept, examples, initialSelection, showFeedback }) => {
  const [selected, setSelected] = useState(examples.map((x, i) => 0));

  const toggleSelect = i => x => {
    if (selected[i] === x) selected[i] = 0;
    else selected[i] = x;
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
