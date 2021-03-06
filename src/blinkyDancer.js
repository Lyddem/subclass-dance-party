
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var args = Array.prototype.slice.call(arguments);

  makeDancer.apply(this, arguments);

  //toggle to jump between time signatures


  this.$node.css('border', 'none').prepend('<img class = "Confetti" src="https://media.giphy.com/media/fJW48ptgclF28/giphy.gif" height="100" width="100" max-width:"100%" max-height: "100%"/>')


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  //oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  // $(.Carlton).appendTo($(this.$node));
};


