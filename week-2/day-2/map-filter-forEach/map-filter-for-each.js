
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
const filterByPastCourse = (array) => {
    return array.filter(s => {
        const past = s.courses.past;
        for (let i = 0; i < past.length; i++){
            if (past[i].phase === 'Bootcamp'){
                return true;
            }
        }
    });
};

console.log(filterByPastCourse(students));



// map