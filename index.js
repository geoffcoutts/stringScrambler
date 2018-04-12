
module.exports = string => {
  let array = string.split('');
  let count = array.length - 1;
  for (let i = 0; i < count; i++) {
    array.splice(Math.floor(Math.random() * Math.floor(array.length - 1)), 1, array[i]);
  }
  let newString = array.join('');
  return newString;

};