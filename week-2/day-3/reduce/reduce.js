// Problem #1 // 
const currentBootcampers = () => {
    
};

// Problem #2 //
const getNamesByLocation = () => {
   
};

// Problem #3 //
const getPrecourseNames = () => {
    
};

// Problem #4 //
const locationBreakdown = (array) => {
    return array.reduce((acc, current) => {
        if (acc[current.location]){
            acc[current.location] += 1;
        } else {
            acc[current.location] = 1;
        }
        return acc;
    }, {});
};

console.log(locationBreakdown(students));