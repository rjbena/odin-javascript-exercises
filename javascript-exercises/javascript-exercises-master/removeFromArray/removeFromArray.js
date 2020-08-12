const removeFromArray = function (arr, ...itemToBeDeleted) {
    let newArr = arr;
    for (let i = 0; i < itemToBeDeleted.length; i++) {
     newArr = newArr.filter(a => a !== itemToBeDeleted[i]);
  }
  return newArr;
};

module.exports = removeFromArray;
