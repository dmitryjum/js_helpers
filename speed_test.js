// testImplement - function that we want to test for execution time
// testParams - paramaters(arguments) that our test function requires to run
// repetitions - count of repetitions we want the whole test to run for better avg time
function SpeedTest(testImplement, testParams, repetitions) {
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000; // reps are optional and defaulted to 10 000 times
  this.average = 0;
}

SpeedTest.prototype = {
  startTest: function(){
    var beginTime, endTime, sumTimes = 0;
    for (var i = 0; x = this.repetitions; i < x; i++){
      beginTime = +new Date(); // start the clock for this current rep.
      this.testImplement(this.testParams); // run the code for this rep.
      endTime = +new Date(); // stop the clock
      sumTimes += endTime - beginTime; // here we add individual time to total loop time
    }
      this.average = sumeTimes / this.repetitions;
      // message with average time
      return console.log("Average execution across " + this.repetitions + ": " + this.average);
  }
}

// possible use:
// var test = new SpeedTest(someFunc, parameters);
// test.startTest();
// return would be: # Average execution across 10000: 0.0041