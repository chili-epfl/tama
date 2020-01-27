const examples = [
  "Bird_._Colorful_17.jpg",
  "Bird_._Colorful_4.jpg",
  "Bird_Fly_._10.jpg",
  "Bird_Fly_._11.jpg",
  "Bird_Fly_._1.jpg",
  "Bird_Fly_._2.jpg",
  "Bird_Fly_._3.jpg",
  "Bird_Fly_._4.jpg",
  "Bird_Fly_Colorful_2.jpg",
  "Bird_Fly_Colorful_5.jpg",
  "Bird_Fly_Colorful_6.jpg",
  "Bird_Fly_Grey_1.jpg",
  "Bird_Fly_Grey_2.jpg",
  "Bird_Fly_Grey_3.jpg",
  "Bird_Fly_Grey_8.jpg",
  "Bird_Fly_Grey_9.jpg",
  "Bird_._Orange_5.jpg",
  "Bird_Swim_Grey_5.jpg",
  "Fish_Swim_._2.jpg",
  "Fish_Swim_._3.jpg",
  "Fish_Swim_Colorful_1.jpg",
  "Fish_Swim_Colorful_2.jpg",
  "Fish_Swim_Colorful_3.jpg",
  "Fish_Swim_Grey_1.jpg",
  "Fish_Swim_Grey_5.jpg",
  "Fish_Swim_Orange_1.jpg",
  "Fish_Swim_Orange_2.jpg",
  "Fish_Swim_Orange_9.jpg",
  "Jellyfish_Swim_Orange_1.jpg",
  "Mammal_None_._1.jpg",
  "Mammal_None_._2.jpg",
  "Mammal_None_._3.jpg",
  "Mammal_None_._4.jpg",
  "Mammal_None_._5.jpg",
  "Mammal_None_._6.jpg",
  "Mammal_None_._7.jpg",
  "Mammal_None_._8.jpg",
  "Mammal_None_Grey_1.jpg",
  "Mammal_None_Grey_5.jpg",
  "Mammal_None_Grey_6.jpg",
  "Mammal_None_Grey_8.jpg",
  "Mammal_None_Grey_9.jpg",
  "Mammal_None_Orange_1.jpg",
  "Mammal_None_Orange_2.jpg",
  "Mammal_None_Orange_3.jpg",
  "Mammal_None_Orange_4.jpg",
  "Mammal_Swim_._1.jpg",
  "Mammal_Swim_Grey_1.jpg",
  "Mammal_Swim_Grey_2.jpg",
  "Mammal_Swim_Grey_4.jpg",
  "Reptile_None_._4.jpg",
  "Reptile_None_Green_1.jpg",
  "Reptile_None_Green_2.jpg",
  "Reptile_None_Green_3.jpg",
  "Reptile_None_Orange_1.jpg",
  "Reptile_Swim_._2.jpg",
  "Reptile_Swim_._3.jpg",
  "Reptile_Swim_._4.jpg",
  "Reptile_Swim_Orange_4.jpg"
].map(x => ({ img: "images/animals/" + x, features: x.split("_") }));

const concepts = [
  [x => x[0] === "Bird", x => x[0] !== ".", "The Birds"],
  [x => x[0] === "Fish", x => x[0] !== ".", "The Fishes"],
  [x => x[0] === "Reptile", x => x[0] !== ".", "The Reptiles"],
  [x => x[0] === "Mammal", x => x[0] !== ".", "The Mammals"],
  [
    x => x[1] === "Swim",
    x => x[1] !== ".",
    "The animals who can swim under water"
  ],
  [x => x[1] === "Fly", x => x[1] !== ".", "The animals fly in the sky"]
];

export default {
  concepts,
  examples
};
