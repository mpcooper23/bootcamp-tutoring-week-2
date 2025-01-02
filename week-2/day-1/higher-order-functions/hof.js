// find()
const find = (array, func) => {
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            return array[i];
        }
    }
};

// mapByDataType()
const mapByDataType = (array, func, datatype) => {
    const output = [];
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === datatype){
            const result = func(array[i], i, array);
            output.push(result);
        }
    }
    return output;
};

// filterByCondition
const filterByCondition = (array, test, condition) => {
    const output = [];
    for (let i = 0; i < array.length; i++){
        if (condition(i, array)){
            if (test(array[i], i, array)){
                output.push(array[i]);
            }
        }
    }
    return output;
}