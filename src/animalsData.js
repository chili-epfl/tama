const examples = [
  "Bird_._Big_NotMammal_NoMeat_4.jpg",
  "Bird_Left_._Small_NoMeat_NotMammal_2.jpg",
  "Bird_Left_11.jpg",
  "Bird_Left_17.jpg",
  "Bird_Left_3.jpg",
  "Bird_Left_5.jpg",
  "Bird_Left_Grey_Small_NotMammal_NoMeat_2.jpg",
  "Bird_Left_Grey_Small_NotMammal_NoMeat_3.jpg",
  "Bird_Right_10.jpg",
  "Bird_Right_12.jpg",
  "Bird_Right_14.jpg",
  "Bird_Right_2.jpg",
  "Bird_Right_6.jpg",
  "Bird_Right_7.jpg",
  "Bird_Right_Grey_Right_Big_NotMammal_Meat_37.jpg",
  "Bird_Right_Grey_Right_Small_NotMammal_NoMeat_38.jpg",
  "Fish_Left_Color_Left_Small_NotMammal_._3.jpg",
  "Fish_Left_Grey_Left_Small_NotMammal_._2.jpg",
  "Fish_Right_12.jpg",
  "Fish_Right_Color_Right_Small_NotMammal_._2.jpg",
  "Fish_Right_Color_Right_Small_NotMammal_._39.jpg",
  "Fish_Right_Grey_Small_NotMammal_._40.jpg",
  "Mammal_._41.jpg",
  "Mammal_Left_11.jpg",
  "Mammal_Left_4.jpg",
  "Mammal_Left_8.jpg",
  "Mammal_Left_Small_Mammal_Meat_20.jpg",
  "Mammal_Left_Small_Mammal_Meat_42.jpg",
  "Mammal_Right_31.jpg",
  "Mammal_Right_32.jpg",
  "Mammal_Right_Big_Mammal_Meat_43.jpg",
  "Mammal_Right_Small_Mammal_Meat_33.jpg",
  "Reptile_._34.jpg",
  "Reptile_._35.jpg",
  "Reptile_._Grey_Right_Small_NotMammal_Carnivorous_44.jpg",
  "Reptile_Left_45.jpg",
  "Reptile_Right_36.jpg"
].map(x => ({ img: "images/animals/" + x, features: x.split("_") }));

const concepts = [
  [x => x[0] === "Bird", x => x[0] !== ".", "The birds"],
  [x => x[0] === "Fish", x => x[0] !== ".", "The fishes"],
  [x => x[0] === "Reptile", x => x[0] !== ".", "The Reptiles"],
  [x => x[0] === "Mammal", x => x[0] !== ".", "The mammals"]
  // [x => x[1] === "Right", x => x[1] !== ".", "The animals facing right"],
  // [x => x[1] === "Left", x => x[1] !== ".", "The animals facing left"]
];

export default {
  concepts,
  examples
};
