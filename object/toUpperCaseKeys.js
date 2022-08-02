module.exports = (object) => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [key.toUpperCase(), value])
  );
};
