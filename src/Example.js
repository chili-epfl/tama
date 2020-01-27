import React from "react";

const colors = ["#770000", "#000077", "#007700"];

export default ({
  img,
  features,
  selected,
  initial,
  select,
  showFeedback,
  submitted,
  concept,
  gameType
}) => {
  const trueCategory = concept(features) ? 1 : -1;

  const background = initial
    ? colors[1 + trueCategory]
    : `${colors[1 + selected]}44`;

  return (
    <div className="Example" style={{ background }}>
      <img src={img} alt="example" />
      {gameType === "student" && !showFeedback && !initial && (
        <div className="category-buttons">
          {[-1, 0, 1].map(x => {
            return selected !== x ? (
              <span
                key={x}
                onClick={() => select(x)}
                style={{ background: colors[x + 1] }}
              ></span>
            ) : null;
          })}
        </div>
      )}
      {showFeedback && !initial && (
        <span className="example-feedback">
          {selected === trueCategory ? (
            <i className="fas fa-check"></i>
          ) : (
            <i className="fas fa-times"></i>
          )}
        </span>
      )}
      {gameType === "teacher" && (
        <div className="category-buttons">
          <span
            onClick={select}
            style={{ background: colors[(initial ? 0 : trueCategory) + 1] }}
          ></span>
        </div>
      )}
    </div>
  );
};
