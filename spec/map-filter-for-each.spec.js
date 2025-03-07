describe("Higher Order Functions", function(){

    describe("logStudentInfo()", function(){
        beforeEach(function () {
            sinon.spy(console, 'log');
          });
      
          afterEach(function () {
            console.log.restore();
          });
        it('should use the forEach() method', function(){
            let func = logStudentInfo.toString();
            assert.equal(func.includes(".forEach("), true);
        });
        it('should log correct data', function(){
            let correct = [
                "Stephanie Cooper - New Orleans, LA - Current Course: Bootcamp",
                "Bethany Joseph - New Orleans, LA - Current Course: Bootcamp",
                "Nathan Coen - Atlanta, GA - Current Course: Immersion - Junior",
                "Kyle Bradley - Baltimore, MD - Current Course: Immersion - Junior"
            ];
            logStudentInfo(students);
            console.log.args.forEach((item, index) => {
                assert.equal(item[0], correct[index]);
            })
        });
    });

    describe("logCourses()", function(){
        beforeEach(function () {
            sinon.spy(console, 'log');
        });
      
        afterEach(function () {
            console.log.restore();
        });
        it('should use the forEach method twice', function(){
            const func = logCourses.toString();
            const regex = /.forEach\(/g;
            const match = func.match(regex);
            assert.equal(match.length >= 2, true);
        });
        it('should log the correct data', function(){
            const correct = [
                "Precourse - 11/18/2024",
                "Bootcamp - 10/18/2024",
                "Prep - 09/18/2024"
            ];
            logCourses(students, 'Nathan Coen');
            console.log.args.forEach((item, index) => {
                assert.equal(item[0], correct[index]);
            })
        });
    });

    describe("filterByCoursesAndLocation()", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'filter');
        });
      
        afterEach(function () {
            Array.prototype.filter.restore();
        });
        it('should return an array', function(){
            const result = filterByCoursesAndLocation(students, 'New Orleans, LA');
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of student objects', function(){
            const result = filterByCoursesAndLocation(students, 'New Orleans, LA');
            const correct = [students[0], students[1]];
            assert.deepEqual(result, correct);
        });
        it('should use the filter method', function(){
            filterByCoursesAndLocation(students, 'New Orleans, LA');
            Array.prototype.filter.called.should.be.true;
        });
    });

    describe("filterByBootcamp()", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'filter');
        });
      
        afterEach(function () {
            Array.prototype.filter.restore();
        });
        it('should return an array', function(){
            const result = filterByBootcamp(students);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of student objects', function(){
            const result = filterByBootcamp(students);
            const correct = [students[2], students[3]];
            assert.deepEqual(result, correct);
        });
        it('should use the native filter method', function(){
            const result = filterByBootcamp(students);
            Array.prototype.filter.called.should.be.true;
        });
    });

    describe("mapCurrentCourses()", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'map');
        });
      
        afterEach(function () {
            Array.prototype.map.restore();
        });
        it('should return an array', function(){
            const result = mapCurrentCourses(students);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of strings', function(){
            const result = mapCurrentCourses(students);
            const correct = [
                'Bootcamp - 12/02/2024', 
                'Bootcamp - 12/02/2024', 
                'Immersion - Junior - 12/18/2024', 
                'Immersion - Junior - 12/18/2024'
            ];
            assert.deepEqual(result, correct);
        });
        it('should use the native map method', function(){
            const result = mapCurrentCourses(students);
            Array.prototype.map.called.should.be.true;
        });
    });

    describe("mapPastCourses()", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'map');
        });
      
        afterEach(function () {
            Array.prototype.map.restore();
        });
        it('should return an array', function(){
            const result = mapPastCourses(students);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of objects', function(){
            const result = mapPastCourses(students);
            const correct = [
                {Prep: '11/02/2024'},
                {Prep: '11/02/2024'},
                {Precourse: '11/18/2024', Bootcamp: '10/18/2024', Prep: '09/18/2024'},
                {Precourse: '11/18/2024', Bootcamp: '10/18/2024', Prep: '09/18/2024'},
            ];
            assert.deepEqual(result, correct);
        });
        it('should use the native map method', function(){
            const result = mapPastCourses(students);
            Array.prototype.map.called.should.be.true;
        });
    });
});