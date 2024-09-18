const removeFromArray = function(array,...values) {
    return array.filter(item => !values.includes(item));//数组中不在values中的保留
};

// Do not edit below this line
module.exports = removeFromArray;
