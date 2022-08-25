const isObject = (value) => {
  return typeof value === "object";
};

/*
 * @param {Array} wList array to validate.
 */
export const isArrayOfWorkList = (wList) => {
  let valid = true;
  for (let i = 0; i < wList.length && valid; i++) {
    if (!isObject(wList[i])) {
      valid = false;
    }
    if (!wList[i].id) {
      valid = false;
    }
  }
  return valid;
};
