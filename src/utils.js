export const shuffle = a => {
  const array = [...a];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const pick = a => a[Math.floor(Math.random() * a.length)];

export const subset = (a, n) => shuffle(a).filter((_, i) => i < n);
