var Benchmark = require('benchmark')
var Table = require('cli-table');

var suite = new Benchmark.Suite()
suite
  .add('RegExp#test', function() {
    ;/o/.test('Hello World!')
  })
  // .add('String#indexOf', function() {
  //   'Hello World!'.indexOf('o') > -1
  // })
  // .add('String#match', function() {
  //   !!'Hello World!'.match(/o/)
  // })
  // add listeners
  .on('cycle', function(event) {
    // console.log(event.target)
  })
  .on('complete', function(data) {
    let benches = data.currentTarget;
    var table = new Table({ head: ["", "Operations Per Second", "Error"] });

    for(var i in benches) {
      var curr = benches[i];
      console.log(`${curr.name}`)



    }
    console.log(data.currentTarget['0'])
    // var table = new Table({ head: ["", "Runs", "Time"] });
    for(var i = 0; i < benches.length; i++) {
      var curr = benches[i]
      console.log(`${curr.name}`)
      consIole.log(curr.stats)
      console.log(curr.times)
      console.log("------")
    }

    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // run async
  .run({ async: true })
