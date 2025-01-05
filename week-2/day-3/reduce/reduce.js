// Problem #1 // 
const currentBootcampers = (array) => {
    return array.reduce((acc, student) => {
        const { phase } = student.courses.current;
        phase === 'Bootcamp' ? acc += 1 : acc;
        return acc;
    }, 0);
};

// Problem #2 //
const getNamesByLocation = (array, location) => {
    return array.reduce((acc, current) => {
        if (current.location === location){
            acc.push(current.name);
        }
        return acc;
    }, []);
};

console.log(getNamesByLocation(students, 'New Orleans, LA'));

// Problem #3 //