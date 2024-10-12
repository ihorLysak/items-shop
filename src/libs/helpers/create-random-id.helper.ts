//id much rather use something like uuid, but json doesn't support hexadecimal numbers
function createRandomId() {
  return Math.floor(Math.random() * 100000000000000000000);
}

export { createRandomId };
