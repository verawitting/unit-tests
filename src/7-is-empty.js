export const isEmpty = (stringArrayOrObject) => {
    const type = typeof stringArrayOrObject;

    if (type === "string") {
        return stringArrayOrObject === "";
    } else if (type === "object") {
        return Object.keys(stringArrayOrObject).length === 0;
    }

    return false;
};

// export const isEmpty = (stringArrayOrObject) => {
//   switch (typeof stringArrayOrObject) {
//     case 'string':
//       return stringArrayOrObject === ''
//     case 'array':
//       return stringArrayOrObject.length === 0
//     case 'object':
//       return Object.keys(stringArrayOrObject).length === 0
//   }
// }
