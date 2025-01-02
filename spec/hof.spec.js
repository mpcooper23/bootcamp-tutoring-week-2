describe("Higher Order Functions", function(){
    describe("find()", function(){
        beforeEach(function () {
            sinon.spy(console, 'log');
            });
        
            afterEach(function () {
            console.log.restore();
        });
        it('should return the correct item if found', function(){
            const result = find(students, function(student){
                return student.name === 'Stephanie Cooper';
            });
            assert.deepEqual(result, students[0]);
        });
        it('should pass the current index to the callback function', function(){
            const result = find(students, function(student, index){
                console.log(index);
                return student.name === 'Stephanie Cooper';
            });
            const logs = [];
            console.log.args.forEach(item => {
                logs.push(item[0]);
            });
            assert.deepEqual(logs, [0]);
        });
        it('should pass the array to the callback function', function(){
            const result = find(students, function(student, index, array){
                console.log(array);
                return student.name === 'Stephanie Cooper';
            });
            let log = console.log.args[0][0];
            assert.deepEqual(log, students);
        })
    });

    describe("mapByDataType", function(){
        beforeEach(function () {
            sinon.spy(console, 'log');
            });
        
            afterEach(function () {
            console.log.restore();
        });
        it('should return an array', function(){
            const data = [null, 1, 'a', 2];
            const result = mapByDataType(data, function(num){
                return num * 10;
            }, 'number');
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array', function(){
            const data = [null, 1, 'a', 2];
            const result = mapByDataType(data, function(num){
                return num * 10;
            }, 'number');
            assert.deepEqual(result, [10, 20]);
        });
        it('should pass the current index to the callback function', function(){
            const data = [null, 1, 'a', 2];
            const result = mapByDataType(data, function(num, index, array){
                console.log(index);
                return num * 10;
            }, 'number');
            const logs = [];
            console.log.args.forEach(item => {
                logs.push(item[0]);
            });
            assert.deepEqual(logs, [1, 3]);
        });
        it('should pass the array to the callback function', function(){
            const data = [null, 1, 'a', 2];
            const result = mapByDataType(data, function(num, index, array){
                console.log(array);
                return num * 10;
            }, 'number');
            const logs = [];
            console.log.args.forEach(item => {
                logs.push(item[0]);
            });
            assert.deepEqual(logs[0], data);
        });

    });

    describe("filterByCondition()", function(){
        beforeEach(function () {
            sinon.spy(console, 'log');
            });
        
            afterEach(function () {
            console.log.restore();
        });
        it('should return an array', function(){
            const data = [10, 20, 30, 40];
            const result = filterByCondition(data, (n) => n >= 30, (index, array) => {
                let mid = Math.floor(array.length / 2) - 1;
                return index >= mid;
            });
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array', function(){
            const data = [10, 20, 30, 40];
            const result = filterByCondition(data, (n) => n >= 30, (index, array) => {
                let mid = Math.floor(array.length / 2) - 1;
                return index > mid;
            });
            assert.deepEqual(result, [30, 40]);
        });
        it('should pass the current index to the test function', function(){
            const data = [10, 20, 30, 40];
            const result = filterByCondition(data, (n, index, array) => {
                console.log(index);
                return n >= 30
            }, (index, array) => {
                let mid = Math.floor(array.length / 2) - 1;
                return index > mid;
            });
            const logs = [];
            console.log.args.forEach(item => {
                logs.push(item[0]);
            });
            assert.deepEqual(logs, [2, 3]);
        });
        it('should pass the array to the test function', function(){
            const data = [10, 20, 30, 40];
            const result = filterByCondition(data, (n, index, array) => {
                console.log(array);
                return n >= 30
            }, (index, array) => {
                let mid = Math.floor(array.length / 2) - 1;
                return index > mid;
            });
            const log = console.log.args[0][0];
            assert.deepEqual(log, data);
        });
        it('should pass the current index to the condition function', function(){
            const data = [10, 20, 30, 40];
            const result = filterByCondition(data, (n, index, array) => {
                return n >= 30
            }, (index, array) => {
                console.log(index);
                let mid = Math.floor(array.length / 2) - 1;
                return index > mid;
            });
            const logs = [];
            console.log.args.forEach(item => {
                logs.push(item[0]);
            });
            assert.deepEqual(logs, [0, 1, 2, 3]);
        });
        it('should pass the array to the condition function', function(){
            const data = [10, 20, 30, 40];
            const result = filterByCondition(data, (n, index, array) => {
                return n >= 30
            }, (index, array) => {
                console.log(array);
                let mid = Math.floor(array.length / 2) - 1;
                return index > mid;
            });
            const log = console.log.args[0][0];
            assert.deepEqual(log, data);
        });
    });
});