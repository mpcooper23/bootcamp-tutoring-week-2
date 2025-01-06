describe("Higher Order Functions", function(){

    describe("currentBootcampers()", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'reduce');
        });
      
        afterEach(function () {
            Array.prototype.reduce.restore();
        });
        it('should return a number', function(){
            const result = currentBootcampers(students);
            assert.equal(typeof result, 'number');
        });
        it('should use the native reduce method', function(){
            const result = currentBootcampers(students);
            Array.prototype.reduce.called.should.be.true;
        });
    });

    describe("getNamesByLocation()", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'reduce');
        });
      
        afterEach(function () {
            Array.prototype.reduce.restore();
        });
        it('should return an array', function(){
            const result = getNamesByLocation(students, 'New Orleans, LA');
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of names', function(){
            const result = getNamesByLocation(students, 'New Orleans, LA');
            assert.deepEqual(result, ['Stephanie Cooper', 'Bethany Joseph']);
        });
        it('should use the native reduce method', function(){
            const result = getNamesByLocation(students, 'New Orleans, LA');
            Array.prototype.reduce.called.should.be.true;
        });
    });

    describe("getPrecourseNames()", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'reduce');
        });
      
        afterEach(function () {
            Array.prototype.reduce.restore();
        });
        it('should return a string', function(){
            const result = getPrecourseNames(students);
            assert.equal(typeof result, 'string');
        });
        it('should return a correct string of names', function(){
            const result = getPrecourseNames(students);
            assert.equal(result, "Nathan Coen\nKyle Bradley\n");
        });
        it('should use the native reduce method', function(){
            const result = getPrecourseNames(students);
            Array.prototype.reduce.called.should.be.true;
        });
    });

    describe("locationBreakdown()", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'reduce');
        });
      
        afterEach(function () {
            Array.prototype.reduce.restore();
        });
        it('should return an object', function(){
            const result = locationBreakdown(students);
            assert.equal(typeof result, 'object');
            assert.equal(!Array.isArray(result) && result !== null, true);
        });
        it('should return a correct object', function(){
            const result = locationBreakdown(students);
            assert.deepEqual(result, {'New Orleans, LA': 2, 'Atlanta, GA': 1, 'Baltimore, MD': 1});
        });
        it('should use the native reduce method', function(){
            const result = locationBreakdown(students);
            Array.prototype.reduce.called.should.be.true;
        });
    });
});