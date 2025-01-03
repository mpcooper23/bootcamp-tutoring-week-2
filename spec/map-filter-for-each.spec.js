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
});