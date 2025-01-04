
// Problem #1 //
const logStudentInfo = (array) => {
    return array.forEach(function(s){
        console.log(`${s.name} - ${s.location} - Current Course: ${s.courses.current.phase}`);
    });
}

// Problem #2 //
const logCourses = (array, student) => {
    array.forEach(s => {
        if (s.name === student){
            s.courses.past.forEach(c => {
                console.log(`${c.phase} - ${c.date}`);
            });
        }
    });
};

// Problem #3 //
const filterByCoursesAndLocation = (array, location) => {
    return array.filter(s => {
        return s.location === location && s.courses.past.length > 0;
    });
};

// Problem #4 //
const filterByBootcamp = (array) => {
    return array.filter(s => {
        const past = s.courses.past;
        for (let i = 0; i < past.length; i++){
            if (past[i].phase === 'Bootcamp'){
                return true;
            }
        }
    });
};

// Problem #5 //
const mapCurrentCourses = (array) => {
    return array.map(s => {
        const { phase, date } = s.courses.current;
        return `${phase} - ${date}`;
    });
};

// Problem #6 //
const mapPastCourses = (array) => {
    return array.map(s => {
        const output = {};
        s.courses.past.forEach(c => {
            const { phase, date } = c;
            output[phase] = date;
        });
        return output;
    });
};

console.log(mapPastCourses(students));



// map