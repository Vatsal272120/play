/* eslint-disable no-restricted-syntax */
const getInitial = (k) =>
  k
    .match(/(\b\S)?/g)
    .join("")
    .match(/(^\S|\S$)?/g)
    .join("")
    .toUpperCase();

const flatten = (obj, roots = [], sep = ".") =>
  Object.keys(obj).reduce(
    (memo, prop) => ({
      ...memo,
      ...(Object.prototype.toString.call(obj[prop]) === "[object Object]"
        ? flatten(obj[prop], roots.concat([prop]))
        : { [roots.concat([prop]).join(sep)]: obj[prop] }),
    }),
    {}
  );

export { flatten, getInitial };
