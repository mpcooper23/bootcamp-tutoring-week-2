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

// Problem #3 //
const getPrecourseNames = (array) => {
    return array.reduce((acc, current) => {
        const { past } = current.courses;
        past.forEach(c => {
            if (c.phase === "Precourse"){
                acc += current.name + "\n";
            }
        })
        return acc;
    }, "");
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