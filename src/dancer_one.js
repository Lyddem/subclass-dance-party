  var makeDancerOne = function(top, left, timeBetweenSteps) {
  //var args = Array.prototype.slice.call(arguments);

  makeDancer.apply(this, arguments);

  //toggle to jump between time signatures

  this.$node.addClass('dancer-One');
  // console.log(this);

  this.$node.css('border', 'none').prepend('<img class = "Confetti" src="https://media.giphy.com/media/120ErahsQyf1q8/giphy.gif" height="200" width="100" max-width:"100%" max-height: "100%"/>')



  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.timeBetweenSteps;
};

makeDancerOne.prototype = Object.create(makeDancer.prototype);
makeDancerOne.prototype.constructor = makeDancerOne;

makeDancerOne.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  //oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};