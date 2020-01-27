const _examples = [
  "Figure_._C_Black_Vertical_Jack_1.png",
  "Figure_._C_Black_Vertical_Queen_2.png",
  "Figure_._C_Club_Vertical_King_3.png",
  "Figure_._D_Red_Vertical_Jack_1.png",
  "Figure_._D_Red_Vertical_Queen_2.png",
  "Figure_._D_Red_Vertical_King_3.png",
  "Figure_._H_Red_Vertical_Jack_1.png",
  "Figure_._H_Red_Vertical_Queen_2.png",
  "Figure_._H_Red_Vertical_King_6.png",
  "Figure_._S_Black_Vertical_Jack_2.png",
  "Figure_._S_Black_Vertical_Queen_7.png",
  "Figure_._S_Black_Vertical_King_3.png",
  "Number_Even_C_Black_Vertical_._10.png",
  "Number_Even_C_Black_Vertical_._2.png",
  "Number_Even_C_Black_Vertical_._4.png",
  "Number_Even_C_Black_Vertical_._6.png",
  "Number_Even_C_Black_Vertical_._8.png",
  "Number_Even_D_Red_Vertical_._8.png",
  "Number_Even_D_Red_Vertical_._10.png",
  "Number_Even_D_Red_Vertical_._2.png",
  "Number_Even_D_Red_Vertical_._6.png",
  "Number_Even_H_Red_Vertical_._10.png",
  "Number_Even_H_Red_Vertical_._2.png",
  "Number_Even_H_Red_Vertical_._6.png",
  "Number_Even_H_Red_Vertical_._8.png",
  "Number_Even_S_Black_Vertical_._10.png",
  "Number_Even_S_Black_Vertical_._2.png",
  "Number_Even_S_Black_Vertical_._4.png",
  "Number_Even_S_Black_Vertical_._6.png",
  "Number_Odd_C_Black_Vertical_._3.png",
  "Number_Odd_C_Black_Vertical_._5.png",
  "Number_Odd_C_Black_Vertical_._7.png",
  "Number_Odd_D_Red_Vertical_._9.png",
  "Number_Odd_H_Red_Vertical_._3.png",
  "Number_Odd_H_Red_Vertical_._5.png",
  "Number_Odd_H_Red_Vertical_._7.png",
  "Number_Odd_H_Red_Vertical_._9.png",
  "Number_Odd_S_Black_Vertical_._5.png",
  "Number_Odd_S_Black_Vertical_._9.png",
  "A_._C_Black_Vertical_As_1.png",
  "A_._D_Red_Vertical_As_1.png",
  "A_._H_Red_Vertical_As_1.png",
  "A_._S_Black_Vertical_As_2.png"
].map(x => ({ img: "images/cards/" + x, features: x.split("_") }));

const examples = [..._examples, ..._examples];

const concepts = [
  [x => x[0] === "Number", x => x[0] !== "A", "The cards with numbers"],
  [x => x[0] === "Figure", x => x[0] !== "A", "The cards with figures"],
  [x => x[1] === "Odd", x => x[1] !== ".", "The cards with odd values"],
  [x => x[1] === "Even", x => x[1] !== ".", "The cards with even values"],

  [x => x[2] === "S", x => true, "The Spades"],
  [x => x[2] === "H", x => true, "The Hearts"],
  [x => x[2] === "D", x => true, "The Diamonds"],
  [x => x[2] === "C", x => true, "The Clubs"],
  [x => x[3] === "Black", x => true, "The black cards"],
  [x => x[3] === "Red", x => true, "The red cards"],

  [x => x[2] === "S", x => x[0] !== "Figure", "The Spades"],
  [x => x[2] === "H", x => x[0] !== "Figure", "The Hearts"],
  [x => x[2] === "D", x => x[0] !== "Figure", "The Diamonds"],
  [x => x[2] === "C", x => x[0] !== "Figure", "The Clubs"],
  [x => x[3] === "Black", x => x[0] !== "Figure", "The black cards"],
  [x => x[3] === "Red", x => x[0] !== "Figure", "The red cards"],

  [x => x[3] === "Black", x => x[0] !== "Number", "The black cards"],
  [x => x[3] === "Red", x => x[0] !== "Number", "The red cards"],

  // [x => x[4] === "Vertical", x => true, "The vertical cards"],
  // [x => x[4] === "Horizontal", x => true, "The horizontal cards"],
  [x => x[5] === "Jack", x => x[5] !== ".", "The Jacks"],
  [x => x[5] === "Queen", x => x[5] !== ".", "The Queens"],
  [x => x[5] === "King", x => x[5] !== ".", "The Kings"],
  [x => x[5] === "As", x => x[5] !== ".", "The Aces"]
];

export default {
  concepts,
  examples
};
