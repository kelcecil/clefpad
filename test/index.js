var should = require('chai').should(),
  clefpad = require('../index');

describe('#clefpad', function() {
  it('does not pad a string with zero clefs;', function() {
    clefpad('The Greens', 0).should.equal('The Greens');
  });
  it('pads a string with one clef;', function() {
    clefpad('LadyGaga', 1).should.equal('🎼LadyGaga🎼');
  });
  it('pads a string with two clefs;', function() {
    clefpad('Lordi', 2).should.equal('🎼🎼Lordi🎼🎼');
  });
});
