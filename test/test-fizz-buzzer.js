'use strict';

// import chai, declare expect variable
const expect = require('chai').expect;

// import fizz-buzzer function
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  // test the normal case
  it('should fizzbuzz the passed number', function () {
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 5, expected: 'buzz'},
      {num: 15, expected: 'fizz-buzz'},
      {num: 4, expected: 4}
    ];

    normalCases.forEach(input => {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });

  });

  it('should raise error if args are numbers', function() {
    const edgeCases = [
      {num: '3'},
      {num: '5'},
      {num: true}
    ];

    edgeCases.forEach(input => {
      expect(() => {
        fizzBuzzer(input.num);
      }).to.throw(Error);
    });
  });
});
