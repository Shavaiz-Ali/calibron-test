const reverseString = (string) => {
  const reverse = string.split("").reverse().join("");
  console.log(reverse);
  return reverse;
};

reverseString("hello");
