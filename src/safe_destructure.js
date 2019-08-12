const safeObject = (obj, path, defaultValue) => {
  // if obj is undefined or null return defaultValue,
  // if default value is not provided undefined will be returned
  if (obj === undefined || obj === null) {
    return defaultValue;
  }
  // if no more path exist , return current value
  if (path.length === 0) {
    return obj;
  }

  // prepare your next inner element
  let nextAttribute = obj[path[0]];
  let remainingAttributes = path.slice(1);

  return safeObject(nextAttribute, remainingAttributes, defaultValue);
};

const safeArray = arr => {
  // if arr is an valid array return it else return empty array
  return arr instanceof Array ? arr : [];
};
module.exports = { safeObject, safeArray };
