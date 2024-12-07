const numbers = [3, 5, 7, 2, 8];

const lagestNumber = (num) => {
  let largest = numbers[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
  }

  console.log(largest);
  return largest;
};

lagestNumber(numbers);
