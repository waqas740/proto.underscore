module.exports = (array) => {
  return array.map((str) => (typeof str == "string" ? str.toUpperCase() : str));
};
