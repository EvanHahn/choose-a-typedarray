var chooser = require('../chooseatypedarray');

var assert = require('assert');
var equal = assert.equal;

describe('chooser', function() {

  var testGroups = [

    {
      type: Int8Array,
      cases: [
        { min: -128, max: 127 }
        { min: -128, max: 127, floats: false }
      ]
    },

    {
      type: Uint8Array,
      cases: [
        { min: 0, max: 255, clamped: false },
        { min: 0, max: 255, clamped: false, floats: false }
      ]
    },

    {
      type: Uint8ClampedArray,
      cases: [
        { min: 0, max: 255 },
        { min: 0, max: 255, clamped: true },
        { min: 0, max: 255, clamped: true, floats: false },
      ]
    },

  ];

  testGroups.forEach(function(testGroup) {
    testGroup.cases.forEach(function(testCase) {

      var testName = [
        'chooses', testGroup.type.name,
        'when passed', JSON.stringify(testCase)
      ];

      it(testName, function() {
        assert.equal(chooser.select(testCase), testGroup.type);
      });

    });
  });

});
