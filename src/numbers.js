const features = [
  n => n % 2,
  n => n % 3,
  n => n === 2 || n === 3,
  n => n < 10,
  n => true,
  n => true
];

const concepts = [
  [x => x[0] === 0, "Even numbers"],
  [x => x[0] === 1, "Odd numbers"],
  [x => x[2], "Prime numbers"],
  [x => x[3], "Small numbers"],
  [x => x[3], "Big numbers"]
];

const examples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default { features, concepts, examples };
