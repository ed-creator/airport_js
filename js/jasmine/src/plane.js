var Plane = function() {
  this.flying = true
}

Plane.prototype.takeOff = function() {
  if (this.flying) {throw ('Plane cannot take off: plane already flying');
  };
};

Plane.prototype.isLanded = function() {
  return !(this.flying);
};
