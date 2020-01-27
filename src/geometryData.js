const _examples = [
  "Blue_._Acute_Parallel_Equal_5.png",
  "Blue_._Acute_Parallel_Unequal_1.png",
  "Blue_._Acute_Parallel_Unequal_2.png",
  "Blue_._Acute_Parallel_Unequal_4.png",
  "Blue_Horizontal_Right_Parallel_Unequal_3.png",
  "Blue_._Right_Parallel_Equal_3.png",
  "Blue_Rotated_Right_Parallel_Equal_1.png",
  "Blue_Rotated_Right_Parallel_Unequal_1.png",
  "Blue_Rotated_Right_Parallel_Unequal_2.png",
  "Blue_Vertical_Right_Parallel_Unequal_2.png",
  "Green_._Acute_Parallel_Unequal_1.png",
  "Green_._Acute_Parallel_Unequal_2.png",
  "Green_._Acute_Parallel_Unequal_5.png",
  "Green_._Acute_Parallel_Unequal_6.png",
  "Green_._Acute_Parallel_Unequal_7.png",
  "Green_Horizontal_Right_Parallel_Unequal_1.png",
  "Green_._Right_Parallel_Equal_9.png",
  "Green_Rotated_Right_Parallel_Equal_6.png",
  "Green_Rotated_Right_Parallel_Unequal_7.png",
  "Green_Vertical_Right_Parallel_Unequal_8.png",
  "Red_._Acute_Parallel_Equal_2.png",
  "Red_._Acute_Parallel_Unequal_1.png",
  "Red_._Acute_Parallel_Unequal_2.png",
  "Red_._Acute_Parallel_Unequal_7.png",
  "Red_Horizontal_Right_Parallel_Unequal_1.png",
  "Red_._Right_Parallel_Equal_3.png",
  "Red_Rotated_Right_Parallel_Equal_4.png",
  "Red_Rotated_Right_Parallel_Unequal_1.png",
  "Red_Rotated_Right_Parallel_Unequal_2.png",
  "Red_Vertical_Right_Parallel_Unequal_1.png"
].map(x => ({ img: "images/geometry/" + x, features: x.split("_") }));

const examples = [..._examples, ..._examples];

const concepts = [
  [x => x[0] === "Red", x => true, "The red shapes"],
  [x => x[0] === "Green", x => true, "The green shapes"],
  [x => x[0] === "Blue", x => true, "The blue shapes"],

  [x => x[0] === "Red", x => x[1] !== ".", "The red shapes"],
  [x => x[0] === "Green", x => x[1] !== ".", "The green shapes"],
  [x => x[0] === "Blue", x => x[1] !== ".", "The blue shapes"],

  [x => x[1] === "Rotated", x => x[1] !== ".", "The shapes rotated by 45°"],
  [x => x[1] === "Vertical", x => x[1] !== ".", "The vertical shapes"],
  [x => x[1] === "Horizontal", x => x[1] !== ".", "The horizontal shapes"],

  [x => x[2] === "Right", x => true, "The shapes with Right angles"],
  [x => x[2] === "Acute", x => true, "The shapes with no right angle"],

  [x => x[4] === "Equal", x => true, "The shapes 4 equal length sides"],
  [x => x[4] === "Unequal", x => true, "The shapes with unequal length sides"]
];

export default {
  concepts,
  examples
};
