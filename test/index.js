var should = require('chai').should(),
  clefpad = require('../index');

describe('#rclefpad', function() {
  it('does not pad a string with zero clefs;', function() {
    rclefpad('The Greens', 0).should.equal('The Greens');
  });
  it('pads a string with one clef;', function() {
    rclefpad('LadyGaga', 1).should.equal('LadyGaga🎼');
  });
  it('pads a string with two clefs;', function() {
    rclefpad('Lordi', 2).should.equal('Lordi🎼🎼');
  });
});
