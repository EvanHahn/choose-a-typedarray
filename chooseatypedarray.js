(function() {

  function chooseATypedArray(options) {

    var min = (typeof options.min === 'undefined') ? 0 : options.min;
    var max = (typeof options.max === 'undefined') ? 0 : options.max;
    var floats = (typeof options.floats === 'undefined') ? false : options.floats;
    var clamped = (typeof options.clamped === 'undefined') ? true : options.clamped;

    if (floats) {

      return; // TODO

    } else {

      // TODO

    }

  }

  if (typeof module !== 'undefined') {
    module.exports = chooseATypedArray;
  } else {
    this.chooseATypedArray = chooseATypedArray;
  }

})();
