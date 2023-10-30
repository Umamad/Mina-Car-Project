/**
 * Group array of object using a key
 * @param {cars[]} xs Array Of Cars
 * @param {string} key group data according to key
 * @returns grouped data
 */
const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export default groupBy;
