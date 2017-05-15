module.exports = function main(strNum) {
  // Write your cade here
  let result = 0;
  for (let num of strNum) {
	result += parseInt(num);
  }
  return result;
};
