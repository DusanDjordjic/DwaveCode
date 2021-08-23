export const average = (array) => {
  if (!array || array.length === 0) return 0;
  let total = 0;
  let count = 0;
  array.forEach((element) => {
    total += element;
    count++;
  });

  return total / count;
};
