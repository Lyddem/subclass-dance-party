
var makeDancerTwo = function(top, left, timeBetweenSteps) {
  //var args = Array.prototype.slice.call(arguments);

  makeDancer.apply(this, arguments);

  this.$node.addClass('dancer-Two');
  this.$node.css('border', 'none').prepend('<img src="https://68.media.tumblr.com/504cb94fe0f41e563f435ee2f833dcb5/tumblr_n47d7f7uFv1rt5pgzo1_400.gif" height="250" width="250"/>')

};

makeDancerTwo.prototype = Object.create(makeDancer.prototype);
makeDancerTwo.prototype.constructor = makeDancerTwo;

makeDancerTwo.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

